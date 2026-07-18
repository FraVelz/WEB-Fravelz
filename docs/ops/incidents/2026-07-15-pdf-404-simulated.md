# Incident drill — PDF path 404 (simulated) — 2026-07-15

**Ticket:** A2-4 · **Runbook:** [`docs/ops/runbook.md`](../runbook.md) §1 PDF roto  
**Type:** simulated failure (no production outage)  
**Operator:** Agente A (Oleada 2)

## Symptom (simulated)

Hiring-manager path: open CV / certificación → iframe vacío or download 404 if `pdfPath` points at a missing file under `public/pdfs/`.

## Checks executed (runbook)

| Step | Command / observation | Result |
|------|----------------------|--------|
| 1. Path exists | `test -f public/pdfs/CV-Fravelz-SpiderMan-InfoJobs.pdf` | **pass** — real CV present |
| 2. Missing path | `test -f public/pdfs/does-not-exist-simulated.pdf` | **fail as expected** — simulates bad `pdfPath` |
| 3. CSP / embed | Confirm `security-headers.ts` marks `/pdfs/*` embeddable (`frame-ancestors 'self'`) | code still matches ADR 0002/0003 |
| 4. Modal fallback | Runbook: `PdfViewerModal` must keep Descargar; no restrictive `sandbox` | unchanged since A1 |
| 5. Local smoke | Prefer `pnpm test:e2e` (Playwright PDF focus) before merge | covered by CI job `e2e-a11y` |

## Mitigate (what we would do if real)

1. Fix `pdfPath` in the cert/CV data source **or** restore the LFS/PDF under `public/pdfs/…`.
2. Redeploy Vercel.
3. If last change broke the modal/headers: revert that commit / promote previous Production deployment.

## Communicate

N/A for simulation. If prod: short note on LinkedIn/status only if CV is the primary hiring CTA and downtime &gt; 30 min.

## Postmortem (5 lines)

1. Root cause class: **data/path drift** (ficha apunta a PDF ausente), not CSP.
2. Detection: manual open + `test -f`; no automated “every pdfPath exists” gate yet (backlog).
3. Impact: single asset; rest of site fine.
4. Fix time estimate: &lt;15 min once path known.
5. Follow-up: optional CI script asserting all `pdfPath` files exist (Oleada 3).

## Related

- Alerts: [`docs/ops/sentry.md`](../sentry.md) — DSN + `portfolio-error-spike` still need human setup.
- Deploy fail path also walked mentally: `pnpm lint` · `pnpm typecheck` · `pnpm audit --audit-level=high` · `pnpm build` are the local rollback checks in runbook §3.
