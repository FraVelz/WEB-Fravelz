#!/usr/bin/env node
/**
 * Archived Lighthouse budget runner (Oleada 2 / A2-2).
 *
 * Written budgets (desktop mid + 4G intent) in docs/audits/lighthouse-budget.json:
 *   LCP ≤ 2500ms · CLS ≤ 0.1 · TTI ≤ 3500ms · a11y ≥ 90 · perf ≥ 85
 *   INP ≤ 200ms is a **field** target (lab navigation often omits INP).
 *
 * LH 13+ has no --budget-path; this script asserts metrics in Node after the run.
 *
 * Usage:
 *   LH_BASE_URL=http://127.0.0.1:3000 pnpm lighthouse:budget
 *   LH_BASE_URL=https://fravelz.vercel.app pnpm lighthouse:budget
 *
 * Optional: LH_CHROME_PATH=/path/to/chrome (defaults to Playwright Chromium).
 * Exit 1 if any hard budget / score floor misses.
 */

import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = (process.env.LH_BASE_URL ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const ROUTES = ["/es", "/es/projects"];
const BUDGET_PATH = join(root, "docs/audits/lighthouse-budget.json");
const OUT_DIR = join(root, "docs/audits/lighthouse-runs");
const MIN_PERF = 85;
const MIN_A11Y = 90;

function loadTimingBudgets() {
  const raw = JSON.parse(readFileSync(BUDGET_PATH, "utf8"));
  /** @type {Record<string, number>} */
  const map = {};
  for (const entry of raw) {
    for (const t of entry.timings ?? []) {
      map[t.metric] = t.budget;
    }
  }
  return map;
}

function resolveChromePath() {
  if (process.env.LH_CHROME_PATH) return process.env.LH_CHROME_PATH;
  try {
    return require("@playwright/test").chromium.executablePath();
  } catch {
    try {
      return require("playwright-core").chromium.executablePath();
    } catch {
      return undefined;
    }
  }
}

function runOne(url, chromePath) {
  const outJson = join(tmpdir(), `lh-${Buffer.from(url).toString("hex").slice(0, 24)}.json`);
  const args = [
    "exec",
    "lighthouse",
    url,
    "--preset=desktop",
    "--only-categories=performance,accessibility",
    "--output=json",
    `--output-path=${outJson}`,
    "--quiet",
    "--chrome-flags=--headless --no-sandbox --disable-gpu",
  ];

  const result = spawnSync("pnpm", args, {
    cwd: root,
    encoding: "utf8",
    env: {
      ...process.env,
      ...(chromePath ? { CHROME_PATH: chromePath } : {}),
    },
  });

  let lhr = null;
  if (existsSync(outJson)) {
    try {
      lhr = JSON.parse(readFileSync(outJson, "utf8"));
    } catch {
      /* ignore */
    }
  }

  return {
    status: result.status ?? 1,
    stderr: result.stderr || "",
    lhr,
  };
}

function summarize(lhr, timingBudgets) {
  const audits = lhr?.audits ?? {};
  const cats = lhr?.categories ?? {};
  const lcp = audits["largest-contentful-paint"]?.numericValue;
  const cls = audits["cumulative-layout-shift"]?.numericValue;
  const tti = audits["interactive"]?.numericValue;
  const inp = audits["interaction-to-next-paint"]?.numericValue;
  const perf = cats.performance?.score != null ? Math.round(cats.performance.score * 100) : null;
  const a11y = cats.accessibility?.score != null ? Math.round(cats.accessibility.score * 100) : null;

  const failures = [];
  const maxLcp = timingBudgets["largest-contentful-paint"];
  const maxCls = timingBudgets["cumulative-layout-shift"];
  const maxTti = timingBudgets["interactive"];

  if (maxLcp != null && lcp != null && lcp > maxLcp) {
    failures.push(`LCP ${Math.round(lcp)}ms > ${maxLcp}ms`);
  }
  if (maxCls != null && cls != null && cls > maxCls) {
    failures.push(`CLS ${cls} > ${maxCls}`);
  }
  if (maxTti != null && tti != null && tti > maxTti) {
    failures.push(`TTI ${Math.round(tti)}ms > ${maxTti}ms`);
  }
  if (perf != null && perf < MIN_PERF) failures.push(`perf ${perf} < ${MIN_PERF}`);
  if (a11y != null && a11y < MIN_A11Y) failures.push(`a11y ${a11y} < ${MIN_A11Y}`);

  return {
    lcpMs: lcp != null ? Math.round(lcp) : null,
    cls,
    ttiMs: tti != null ? Math.round(tti) : null,
    inpMs: inp != null ? Math.round(inp) : null,
    perf,
    a11y,
    failures,
  };
}

function main() {
  const chromePath = resolveChromePath();
  if (!chromePath) {
    console.error("No Chrome found. Install Playwright Chromium or set LH_CHROME_PATH.");
    process.exit(1);
  }

  const timingBudgets = loadTimingBudgets();
  mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const rows = [];
  let hardFail = false;

  console.log(`Lighthouse budget vs ${BASE}`);
  console.log(`Chrome: ${chromePath}`);
  console.log(`Budget file: ${BUDGET_PATH}`);
  console.log(`Floors: perf≥${MIN_PERF} a11y≥${MIN_A11Y} · field INP≤200ms`);

  for (const path of ROUTES) {
    const url = `${BASE}${path}`;
    process.stdout.write(`→ ${url} … `);
    const { status, lhr, stderr } = runOne(url, chromePath);
    if (!lhr) {
      hardFail = true;
      console.log(`ERROR (exit ${status})`);
      if (stderr) console.error(stderr.slice(0, 800));
      rows.push({ path, error: `exit ${status}` });
      continue;
    }

    const summary = summarize(lhr, timingBudgets);
    const rawPath = join(OUT_DIR, `${stamp}${path.replace(/\//g, "_")}.json`);
    writeFileSync(rawPath, JSON.stringify(lhr, null, 2));

    if (summary.failures.length) {
      hardFail = true;
      console.log(`FAIL (${summary.failures.join("; ")})`);
    } else {
      console.log(`ok perf=${summary.perf} a11y=${summary.a11y} LCP=${summary.lcpMs}ms CLS=${summary.cls}`);
    }
    if (summary.inpMs == null) console.log("  note: INP n/a in lab navigation (field budget ≤200ms)");
    rows.push({ path, ...summary });
  }

  const mdPath = join(root, `docs/audits/lighthouse-budget-${stamp}.md`);
  const md = [
    `# Lighthouse budget run — ${stamp}`,
    "",
    `Base: \`${BASE}\``,
    "",
    "Budgets: see [`lighthouse-budget.json`](./lighthouse-budget.json) (LCP ≤ 2.5s, CLS ≤ 0.1, TTI ≤ 3.5s).",
    `Score floors: performance ≥ ${MIN_PERF}, accessibility ≥ ${MIN_A11Y}. INP ≤ 200ms is a field target.`,
    "",
    "| Route | Perf | a11y | LCP | CLS | INP | Result |",
    "|-------|-----:|-----:|-----|-----|-----|--------|",
    ...rows.map((r) => {
      if (r.error) return `| \`${r.path}\` | — | — | — | — | — | ERROR |`;
      const ok = !r.failures?.length;
      const detail = r.failures?.length ? `FAIL: ${r.failures.join("; ")}` : "pass";
      return `| \`${r.path}\` | ${r.perf ?? "—"} | ${r.a11y ?? "—"} | ${r.lcpMs ?? "—"} ms | ${r.cls ?? "—"} | ${r.inpMs ?? "n/a"} | ${detail} |`;
    }),
    "",
    "Re-run: `LH_BASE_URL=… pnpm lighthouse:budget`",
    "",
    "CI note: archived local/prod gate (`pnpm lighthouse:budget`). Not a required PR job yet — wire optionally against preview URLs.",
    "",
    "## Residual (honest)",
    "",
    "Production lab runs may miss LCP/perf floors (cold edge + simulated throttling + GSAP home).",
    "Treat failures as backlog for Oleada 3 perf polish — do not inflate the scorecard.",
    "",
  ].join("\n");
  writeFileSync(mdPath, md);
  console.log(`Wrote ${mdPath}`);

  if (hardFail) process.exit(1);
}

main();
