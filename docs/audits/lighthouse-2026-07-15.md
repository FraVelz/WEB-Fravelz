# Lighthouse baseline — 2026-07-15

Lab run against local `next dev` (Turbopack) on `127.0.0.1:3000`, Chromium via Playwright, Lighthouse 13.4, **desktop preset**, categories `performance` + `accessibility`.

**Budgets (target):** LCP ≤ 2.5s · CLS ≤ 0.1 · a11y score ≥ 90.

| Route | Perf | a11y | LCP | FCP | CLS | TBT | INP |
|-------|-----:|-----:|-----|-----|-----|-----|-----|
| `/es` (home) | 91 | 93 | 1.9 s | 0.5 s | 0 | 10 ms | n/a (lab) |
| `/es/projects` | 99 | 92 | 0.8 s | 0.4 s | 0 | 0 ms | n/a (lab) |

Notes:

- Dev server metrics are **not** production CDN numbers; treat as relative baseline for regressions.
- INP needs field / interaction traces; lab navigation does not emit a stable INP here.
- Re-run: `pnpm exec next dev` + `pnpm exec lighthouse <url> --preset=desktop --only-categories=performance,accessibility`.

Related: design tokens in [docs/es/tokens.md](../es/tokens.md).
