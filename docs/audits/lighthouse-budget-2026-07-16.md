# Lighthouse budget run — 2026-07-16

Base: `https://fravelz.vercel.app`

Budgets: see [`lighthouse-budget.json`](./lighthouse-budget.json) (LCP ≤ 2.5s, CLS ≤ 0.1, TTI ≤ 3.5s).
Score floors: performance ≥ 85, accessibility ≥ 90. INP ≤ 200ms is a field target.

| Route | Perf | a11y | LCP | CLS | INP | Result |
|-------|-----:|-----:|-----|-----|-----|--------|
| `/es` | 63 | 93 | 3894 ms | 0 | n/a | FAIL: LCP 3894ms > 2500ms; TTI 3902ms > 3500ms; perf 63 < 85 |
| `/es/projects` | 70 | 92 | 3296 ms | 0 | n/a | FAIL: LCP 3296ms > 2500ms; perf 70 < 85 |

Re-run: `LH_BASE_URL=… pnpm lighthouse:budget`

CI note: archived local/prod gate (`pnpm lighthouse:budget`). Not a required PR job yet — wire optionally against preview URLs.

## Residual (honest)

Production lab runs may miss LCP/perf floors (cold edge + simulated throttling + GSAP home).
Treat failures as backlog for Oleada 3 perf polish — do not inflate the scorecard.
