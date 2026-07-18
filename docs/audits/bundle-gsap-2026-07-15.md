# Bundle analyzer + GSAP cut (2026-07-15)

## How to measure

```bash
pnpm analyze
```

Opens the `@next/bundle-analyzer` report after `ANALYZE=true next build`. Focus on **client** chunks for `/[lang]` (home) and shared `gsap` / `ScrollTrigger` modules.

## What we cut (no kitchen-sink)

| Change | Why |
|--------|-----|
| `next/dynamic` for `HeroEntrance`, `HomeScroll`, `HomeAmbientGlow` | Splits GSAP + ScrollTrigger into client chunks off the critical home graph |
| Single `@/lib/gsap` entry (404 aligned) | One registerPlugin path; avoids duplicate `gsap` graph from raw `import gsap from "gsap"` on 404 |
| No new GSAP plugins / timelines | Constraint: no animation packing for score inflation |

Note: `ssr: false` cannot be used with `next/dynamic` inside Server Components (Next 16). Islands stay client modules via dynamic import with default SSR.

## Expected shape

- Home still SSR-renders hero **content** (`HeroSection` is a Server Component).
- Motion islands load after paint; `data-hero-pending` + Playwright smoke remain the a11y contract.
- Ambient glow and horizontal scroll never block first HTML.

## Follow-ups (not this ticket)

- Optional: split `ScrollTrigger` only where horizontal scroll mounts (further route isolation).
- Lighthouse gate / LCP budget → oleada 2 (`A2-2`).

## Constraint note

Do **not** add decorative GSAP for “perf theater.” Measure first (`pnpm analyze`), then cut.
