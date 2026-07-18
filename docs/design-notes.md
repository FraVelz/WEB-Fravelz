# Design notes — Button · PanelReveal · Modal PDF

Mini system notes for shared UI (Plan 12 **A3-2**). Tokens: [`docs/es/tokens.md`](./es/tokens.md). Scope rule: [`.cursor/rules/component-scope.mdc`](../.cursor/rules/component-scope.mdc).

There is **no** generic `<Button>` package component. CTAs reuse **hero button classes** + a few dedicated controls.

---

## 1. Button (hero / CTA pattern)

### Where

| Piece | Path |
|-------|------|
| Solid / outline classes | `src/features/hero/hero.css` (`.hero-btn-solid`, `.hero-btn-outline`) |
| Focus tokens | `src/app/globals.css` (`--hero-btn-*-focus-shadow`) |
| Solid consumer | `src/components/ui/CopyEmailButton.tsx` |
| Outline consumer | `src/features/hero/components/HeroCvCopyActions.tsx` (CV PDF trigger) |

### Props / contract (practical)

| Control | Role | Must have |
|---------|------|-----------|
| Copy email | `button` | Visible label or `aria-label`; min touch ~`2.625rem` |
| Open CV PDF | `button` | Stable `id="hero-cv-pdf-trigger"` for focus restore + e2e |
| Theme toggle | separate | Do **not** apply `hero-btn-*` (own focus ring) |

### a11y

- Prefer `focus-visible` + CSS variables; do not invent one-off outlines.
- Keep `min-h-[2.625rem]` (or equivalent) for primary CTAs.
- Do not steal focus with GSAP on the CV trigger after mount (e2e waits `#presentation` without `data-hero-pending`).

### Do

- Reuse `hero-btn-solid` / `hero-btn-outline` for primary CTAs in hero/contact.
- Pass the **DOM trigger** into `usePdfViewer().openViewer(..., trigger)` so Escape restores focus.

### Don’t

- Create `src/components/ui/Button.tsx` “just in case”.
- Put a projects-only CTA in `components/ui` (keep under `features/projects`).
- Disable focus rings for motion aesthetics.

---

## 2. PanelReveal

### Where

- `src/components/ui/PanelReveal.tsx` + `PanelReveal.module.css`
- Marked `data-home-panel-reveal` for GSAP home scroll

### Props

```ts
type PanelRevealProps = {
  children: ReactNode;
  className?: string;
};
```

Wrapper only: `will-change: transform, opacity` so horizontal scroll `xPercent` is not fighting nested transforms.

### a11y / motion

- Respect `prefers-reduced-motion` at the GSAP orchestration layer (home), not inside this dumb wrapper.
- Do not put interactive focus traps inside the reveal shell itself.

### Do

- Wrap **home panels** that participate in the horizontal narrative.
- Keep it in `components/ui` (multiple features: hero, hobbies, projects, about-me).

### Don’t

- Animate `xPercent` on the same node that GSAP already transforms for scroll.
- Nest PanelReveal inside PanelReveal.
- Use it as a generic card chrome outside the home scroll story.

---

## 3. Modal PDF (`PdfViewerModal` + `usePdfViewer`)

### Where

| Piece | Path |
|-------|------|
| Dialog UI | `src/components/ui/PdfViewerModal.tsx` |
| Styles | `src/components/ui/pdf-viewer-modal.css` |
| Hook | `src/components/ui/CertificatesWithViewer/hook/usePdfViewer.tsx` |
| ADR | [`docs/adr/0002-pdfs-csp-embed.md`](./adr/0002-pdfs-csp-embed.md), [`0003-no-pdf-iframe-sandbox.md`](./adr/0003-no-pdf-iframe-sandbox.md) |

### Props (`PdfViewerModal`)

| Prop | Type | Notes |
|------|------|-------|
| `isOpen` | `boolean` | Drives `showModal()` / `close()` |
| `onClose` | `() => void` | Wired to dialog `close` event |
| `pdfUrl` | `string` | Same-origin path under `public/` |
| `title` | `string` | `aria-labelledby` → `#pdf-modal-title` |
| `closeText` / `downloadText` | `string?` | i18n from callers |

### a11y contract

1. Native `<dialog>` + `showModal()` so the browser tracks the opener.
2. Initial focus → close button (`pdf-modal-close`).
3. **Escape** / backdrop / close → `onClose` → hook restores focus (ref + stable `id`).
4. Always keep **Descargar PDF** — never an iframe-only dead end (runbook).
5. **No** restrictive `sandbox` on the iframe (breaks viewers) — ADR 0003.

### Do

- Keep dialog mounted; toggle open via `showModal`/`close`.
- Point iframe `src` only while `isOpen` (avoid background loads).
- Verify with `e2e/a11y-smoke.spec.ts` (“CV PDF: open, Escape, restore focus”).

### Don’t

- Reintroduce `sandbox="allow-downloads"` without scripts.
- Build a second PDF modal for CV vs certificates — share the hook.
- Close by unmounting only (breaks native focus restore).

---

## Related

- Tokens / z-index PDF = `100`: [`docs/es/tokens.md`](./es/tokens.md)
- Incident drill PDF 404: [`docs/ops/incidents/2026-07-15-pdf-404-simulated.md`](./ops/incidents/2026-07-15-pdf-404-simulated.md)
