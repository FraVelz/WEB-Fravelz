# ADR 0003 — No restrictive sandbox on PDF iframe

- **Status:** Accepted
- **Date:** 2026-07-15
- **Context:** A prior “security hardening” set `sandbox="allow-downloads"` on the PDF iframe. The browser viewer went **blank** (needs script/same-origin capabilities the sandbox stripped).

## Decision

**Do not** put a restrictive `sandbox` attribute on the same-origin PDF `<iframe>`. Rely on:

- Same-origin static PDFs
- CSP `frame-src 'self'` + embeddable headers for `/pdfs/*`
- `<dialog>` modal UX with download fallback

Document this explicitly so future “add sandbox for security” PRs get rejected without an ADR update.

## Consequences

- **Positive:** PDF viewer works; Escape/focus smoke tests stay green.
- **Positive:** Honest security story — sandbox that breaks UX is not security.
- **Negative:** Iframe is a full same-origin document context; mitigated by serving only our static PDFs, not user-uploaded HTML.

## Alternatives considered

| Option | Why not |
|--------|---------|
| `sandbox="allow-scripts allow-same-origin allow-downloads"` | Nearly equivalent to no sandbox; false confidence |
| PDF.js in-canvas renderer | Heavier bundle; out of scope for portfolio mid-shape |
| Download-only (no iframe) | Worse hiring demo / a11y for quick scan |

## References

- Incident note in audit guide / plan 11 honesty work
- [`PdfViewerModal.tsx`](../../src/components/ui/PdfViewerModal.tsx) — no `sandbox`
- [`docs/adr/0002-pdfs-csp-embed.md`](./0002-pdfs-csp-embed.md)
