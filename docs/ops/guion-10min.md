# Guion 10 min — Portafolio (hired)

Plan 12 §7.A / ticket **A3-4**. Demo for a hiring manager. Live site: https://fravelz.vercel.app/

**Narrativa correcta:** junior+ craft + honesty de producto. Mid fullstack se demuestra en otros repos (ICFES / Marcadores), no “porque el portfolio está animado”.

**No decir:** “Soy fullstack senior por el portfolio animado.”

---

| Min | Qué mostrar | Evidencia (repo / URL) |
|-----|-------------|------------------------|
| 0:30 | Honesty badges en cards (Demo / Piloto / Lab / Privado / Terminado) | Prod: `/es/projects` · `src/features/projects/components/ProjectHonestyBadges.tsx` · `src/features/projects/components/ProjectCardView.tsx` · regression [`docs/audits/honesty-regression-2026-07-15.md`](../audits/honesty-regression-2026-07-15.md) |
| 1:30 | PDF CV: abrir → Escape → foco vuelve al trigger | Prod: home `/es` botón CV · `src/components/ui/PdfViewerModal.tsx` · `usePdfViewer` · e2e [`e2e/a11y-smoke.spec.ts`](../../e2e/a11y-smoke.spec.ts) · ADR [`docs/adr/0003-no-pdf-iframe-sandbox.md`](../adr/0003-no-pdf-iframe-sandbox.md) |
| 3:30 | CI e2e a11y + Lighthouse archivado | CI [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) (`quality` + `e2e-a11y`) · budget [`docs/audits/lighthouse-budget-2026-07-16.md`](../audits/lighthouse-budget-2026-07-16.md) · runs [`docs/audits/lighthouse-runs/`](../audits/lighthouse-runs/) · script `pnpm lighthouse:budget` |
| 5:30 | Tokens + ADR | [`docs/es/tokens.md`](../es/tokens.md) · [`docs/design-notes.md`](../design-notes.md) · [`docs/adr/`](../adr/) (0001 App Router, 0002 PDFs+CSP, 0003 no sandbox) |
| 7:30 | Qué **no** es: no mid fullstack solo por el sitio | [`CONTRIBUTING.md`](../../CONTRIBUTING.md) · esta nota · ficha guía auditoría Plan 12 |

---

## Orden de clic sugerido

1. Home → badges en featured / grid proyectos.
2. Abrir CV PDF desde hero → Tab/Escape → foco en `#hero-cv-pdf-trigger`.
3. Abrir GitHub Actions del repo (último verde) + abrir un MD de Lighthouse en `docs/audits/`.
4. En el IDE: `docs/es/tokens.md` + un ADR.
5. Cerrar: “El mid lo enseño en ICFES/Marcadores; aquí enseño craft, a11y y honestidad.”

## Ops de apoyo (si preguntan)

- Runbook: [`docs/ops/runbook.md`](./runbook.md)
- Sentry: [`docs/ops/sentry.md`](./sentry.md)
- Drill PDF: [`docs/ops/incidents/2026-07-15-pdf-404-simulated.md`](./incidents/2026-07-15-pdf-404-simulated.md)
