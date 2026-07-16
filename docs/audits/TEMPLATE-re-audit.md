# Audit template — WEB-Fravelz (quarterly re-audit)

Copy this file to `docs/audits/WEB-Fravelz-YYYY-MM-DD.md` and fill every section.  
Reference example: [`WEB-Fravelz-2026-07-09.md`](./WEB-Fravelz-2026-07-09.md).

**Cadence:** once per quarter (or after a major home/PDF/i18n change).  
**Do not** raise scorecard ≥ 9 without linking evidence below.

---

## Meta

| Field | Value |
|-------|-------|
| Date | YYYY-MM-DD |
| Auditor | |
| Branch / commit | |
| Prod URL | https://fravelz.vercel.app/ |
| Previous audit | |

## Summary

2–4 sentences: what changed since last audit, overall risk, whether hiring narrative stays honest (junior+ craft, not mid fullstack from the site alone).

## P0 (must fix before claim)

- [ ] item — evidence / owner

## P1 (monitor)

- [ ] item

## P2 (backlog)

- [ ] item

## Checks

| Area | Status | Evidence path / command |
|------|--------|-------------------------|
| Security | PASS / FAIL / N/A | `pnpm audit --audit-level=high`, `security-headers.ts` |
| SEO | | `src/app` metadata, sitemap, robots |
| a11y | | `pnpm test:e2e`, manual keyboard PDF/search |
| UX / honesty | | badges on card+detail; `docs/audits/honesty-regression-*.md` |
| Perf | | `docs/audits/lighthouse-*.md`, `pnpm lighthouse:budget` |
| Ops | | Sentry sample, runbook, last incident note |
| Docs | | CONTRIBUTING, ADRs, design-notes, guion 10 min |
| CI | | `.github/workflows/ci.yml` last green |

## Commands run

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm format:check
pnpm audit --audit-level=high
pnpm build
pnpm test:e2e
# optional:
# pnpm lighthouse:budget
# pnpm analyze
```

Paste exit status / notable output (no secrets).

## Scorecard note (honest)

| Eje (rúbrica 00) | Prior | Now | Evidence or “no change” |
|------------------|------:|----:|-------------------------|
| Honestidad | | | |
| Dominio | | | |
| UI craft | | | |
| a11y | | | |
| Perf | | | |
| Seguridad | | | |
| Tests | | | |
| Ops | | | |
| Docs | | | |
| Señal hired | | | |
| **Media** | | | **Only raise with evidence** |

## Follow-ups

| ID | Action | Target date |
|----|--------|-------------|
| | | |

## Sign-off

- [ ] P0 empty or ticketed
- [ ] Guion 10 min still accurate ([`docs/ops/guion-10min.md`](../ops/guion-10min.md))
- [ ] Plan 12 §10 **not** inflated without new evidence
