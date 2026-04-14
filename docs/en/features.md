# Portfolio features

## Design

- **Dark mode** with auto / light / dark (layout scripts + `localStorage`)
- **Cyan/purple gradients** on titles and CTAs
- **Responsive** layout for mobile, tablet, and desktop
- **Animations**: GSAP (horizontal panels, header, 404) and CSS transitions
- **Backdrop blur** on header and overlays
- **Horizontal scroll** (desktop) for the projects / technologies / about / hobbies strip

## Internationalization (i18n)

- **4 languages**: Spanish, English, Russian, Chinese (`es`, `en`, `ru`, `zh`)
- **Prefixed routes**: `/{lang}/…`
- **Middleware** on `/`: `lang` cookie or `Accept-Language`
- **Translations**: JSON under `public/locals/{lang}/`, merged on the server (`src/utils/i18n.ts`)
- **Client**: `public/i18n.js` for `data-i18n` and the `language-changed` event
- **Language selector**: navigates to the same path in another locale (full navigation)

## Interactive features

- **Header search** (portfolio + translations via `public/locals/`)
- **Certificates** with PDF viewer (client components)
- **Music player** (existing components)
- **Theme** toggle
- **Contact form**: `mailto:` body built on the client
- **About timeline** with “Read more” modal (client logic)

## Performance

- **SSG** with `generateStaticParams` where applicable
- **React Server Components** by default; **`"use client"`** only when needed
- **`next/image`** for optimized images when using the `Image` component
- **Tailwind CSS v4** via PostCSS
- **Bundling**: Next.js route-based splitting and client/server boundaries

## Main sections

- **Presentation**: hero with logo and location
- **Projects**: grid + per-`slug` detail page
- **Technologies**: skill cards (`src/components/features/technologies/data.ts`)
- **About me**: timeline + modal
- **Hobbies**: card grid with pointer effect
- **Contact**: email copy + mailto form

## Tech stack

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4
- **GSAP** 3

## Data and configuration

- **Projects**: `src/utils/data/` (`projects-list.ts`, `project-*.ts`, `project-types.ts`)
- **Translations**: `public/locals/` (folder name is **`locals`**, not `locales`)
- **SEO**: `generateMetadata`, `app/sitemap.ts`, `public/robots.txt`

## Deployment

- **Recommended**: [Vercel](https://vercel.com/) with the Next.js preset
- **URL**: https://fravelz.vercel.app/

[Return to readme...](../../README.md)

> Author: Fravelz · Documentation updated: 2026
