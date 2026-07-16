# Runbook — Portafolio WEB-Fravelz (1 página)

Incidents a hiring manager / yo-futuro puede resolver en &lt;15 min. Prod: <https://fravelz.vercel.app/> · Repo: `WEB-Fravelz`.

---

## 1. PDF roto / visor en blanco

**Síntomas:** modal PDF abre pero iframe vacío; o descarga 404.

| Check | Acción |
|-------|--------|
| Path existe | Archivo bajo `public/pdfs/…` (CV: `public/pdfs/cv/…`). Commit LFS si aplica. |
| CSP / headers | Rutas `/pdfs/*` usan `embeddable: true` en `security-headers.ts` (`frame-ancestors 'self'`). No añadir `sandbox` al iframe sin ADR. |
| Modal | `PdfViewerModal` + `usePdfViewer` — sin `sandbox` restrictivo (rompe viewers). Fallback: botón Descargar. |
| Local | `pnpm dev` → abrir CV / certificación; Escape debe cerrar y restaurar foco. |

**Rollback rápido:** revert del último cambio a `PdfViewerModal` / `security-headers.ts`; redeploy Vercel.

---

## 2. i18n key missing (flash de clave cruda)

**Síntomas:** UI muestra `project_honesty_demo` u otra clave en lugar del copy.

| Check | Acción |
|-------|--------|
| 4 locales | Misma clave en `public/locals/{es,en,ru,zh}/` (todos los JSON del `LOCALE_FILES`). |
| Fallback | Preferir `translationOr` / `??` en UI; badges usan `FALLBACK_LABELS` en `ProjectHonestyBadges`. |
| CI mental | Antes de merge: buscar la clave nueva en los 4 idiomas. |

**Hotfix:** añadir la clave en `es` + `en` mínimo; completar `ru`/`zh` en el mismo PR si es copy visible.

---

## 3. Deploy fail (Vercel / build)

**Síntomas:** deploy rojo; preview no actualiza.

| Check | Acción |
|-------|--------|
| Build local | `NEXT_PUBLIC_SITE_URL=https://fravelz.vercel.app pnpm build` |
| Lint | `pnpm lint` · `pnpm format:check` |
| Audit | `pnpm audit --audit-level=high` (CI gate) |
| Env | `NEXT_PUBLIC_SITE_URL`; opcional `NEXT_PUBLIC_SENTRY_DSN` (sin DSN = Sentry no-op) |
| Lockfile | `pnpm install --frozen-lockfile` debe pasar |

**Logs:** Vercel → Deployment → Building. Buscar TypeScript / Turbopack / `ssr: false` en Server Components.

**Rollback:** Promote previous Production deployment en Vercel UI, o `git revert` + push (solo con petición explícita de push).

---

## Enlaces útiles

- Sentry: [`docs/ops/sentry.md`](./sentry.md)
- Bundle/GSAP: [`docs/audits/bundle-gsap-2026-07-15.md`](../audits/bundle-gsap-2026-07-15.md)
- ADRs: [`docs/adr/`](../adr/)
- E2E: `pnpm test:e2e` (Playwright a11y smoke)
