# ADR 0002 — Static PDFs + CSP embed

- **Status:** Accepted
- **Date:** 2026-07-15
- **Context:** CV and certificates must open in-page. Security headers must not blank the viewer.

## Decision

1. Serve PDFs as **static files** under `public/pdfs/` (same origin).
2. Apply **stricter CSP** site-wide, but for `/pdfs/*` use `getSecurityHeaders({ embeddable: true })` so `frame-ancestors 'self'` and `X-Frame-Options: SAMEORIGIN` allow the portfolio iframe.
3. Keep `frame-src 'self'` so only same-origin PDFs embed.

## Consequences

- **Positive:** No third-party PDF host; hiring demo is reliable offline-from-CDN perspective.
- **Positive:** CSP remains deny-by-default for framing the rest of the site.
- **Negative:** Large PDFs live in git/LFS; updates need careful commits.
- **Negative:** Must remember dual header paths in `next.config.ts` when changing CSP.

## Alternatives considered

| Option | Why not |
|--------|---------|
| External Google Docs / Drive embed | Fragile CSP, tracking, offline fail |
| `object`/`embed` only | Weaker a11y + styling control vs iframe + download fallback |
| Disable CSP for convenience | Loses security signal |

## References

- [`security-headers.ts`](../../security-headers.ts)
- [`next.config.ts`](../../next.config.ts)
- [`src/components/ui/PdfViewerModal.tsx`](../../src/components/ui/PdfViewerModal.tsx)
- Runbook §1: [`docs/ops/runbook.md`](../ops/runbook.md)
