# Portfolio features

## Design

- **Dark mode** with auto / light / dark (layout scripts + `localStorage`)
- **Cyan/purple gradients** on titles and CTAs
- **Responsive** layout for mobile, tablet, and desktop
- **Animations**: GSAP (horizontal panels, hero entrance, header, 404) and CSS transitions — islands via
  `next/dynamic` (no new kitchen-sink motion)
- **Backdrop blur** on header and overlays
- **Horizontal scroll** (desktop) for projects / technologies / about / hobbies
- **Design tokens**: [`docs/es/tokens.md`](../es/tokens.md) (canonical; EN structure mirrors)

## Product honesty (DoD)

- Typed **`honesty`** badges: Demo / Piloto / Lab / Privado / Terminado on **card** and **detail**
- `privateRepo: true` is never sold as full open source
- Featured copy aligned with audit guides (ICFES, Marcadores, Starcrypt, Eco, labs)

## Internationalization (i18n)

- **4 languages**: Spanish, English, Russian, Chinese (`es`, `en`, `ru`, `zh`)
- **Prefixed routes**: `/{lang}/…`
- **Redirect at `/`**: `lang` cookie or `Accept-Language` ([`src/proxy.ts`](../../src/proxy.ts))
- **Translations**: JSON under `public/locals/{lang}/`, merged on the server
- **`<html lang>`**: set on the server via the `x-lang` header
- **Language selector**: navigates to the same path in another locale
- New keys → all **4** locales (see runbook)

## Interactive features

- **Header search** (empty “no results” state)
- **Certificates / CV** PDF viewer (`<dialog>`, Escape, focus restore) — no restrictive `sandbox`
- **Theme** toggle
- **Contact form**: `mailto:`
- **About timeline** with “Read more” modal
- **Project filters** with empty state (`data-testid="projects-filter-empty"`)

## Performance and ops

- **SSG** / App Router with `generateStaticParams` where applicable
- **RSC** by default; **`"use client"`** only when needed
- **`next/image`** + Tailwind CSS v4
- **Bundle analyzer**: `pnpm analyze` · GSAP notes in audits
- **Sentry** client (low sample; no-op without DSN) — [`docs/ops/sentry.md`](../ops/sentry.md)
- **Runbook** — [`docs/ops/runbook.md`](../ops/runbook.md)
- **CI**: lint, format, audit, build + **Playwright a11y smoke**

## Main sections

- **Presentation**: Fravelz brand hero, CV PDF, location
- **Projects**: grid + per-`slug` detail + honesty badges
- **Technologies** / **About** / **Hobbies** / **Contact**

## Tech stack

- **Next.js** 16 (App Router) — [ADR 0001](../adr/0001-app-router.md)
- **React** 19 · **TypeScript** · **Tailwind CSS** 4 · **GSAP** 3
- **Playwright** · **@sentry/nextjs** · **@next/bundle-analyzer**

## Data and configuration

- **Projects**: `src/utils/data/` (`projects-list.ts`, `project-*.ts`, `project-types.ts`)
- **Translations**: `public/locals/` (folder name is **`locals`**, not `locales`)
- **SEO**: `generateMetadata`, `app/sitemap.ts`, `public/robots.txt`
- **ADRs**: [`docs/adr/`](../adr/)

## Deployment

- **Recommended**: [Vercel](https://vercel.com/) with the Next.js preset
- **URL**: <https://fravelz.vercel.app/>

[Return to readme...](../../README.md)

> Last updated: 2026-07-15
