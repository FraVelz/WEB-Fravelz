# Project structure

## Main directories

```text
WEB-Fravelz/
├── public/                         # Static assets (public URL)
│   ├── locals/                     # i18n translations (es, en, ru, zh) — JSON per section
│   ├── music/                      # MP3 audio
│   ├── images/                     # Site images
│   ├── robots.txt                  # SEO (robots)
│   └── pdfs/                       # Certificate PDFs (referenced from data)
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (theme scripts, globals.css, html lang)
│   │   ├── globals.css             # Tailwind v4 + tokens and global styles
│   │   ├── not-found.tsx           # 404 page
│   │   ├── sitemap.ts              # Generated sitemap (/sitemap.xml)
│   │   └── [lang]/                 # Locale-prefixed routes
│   │       ├── layout.tsx          # [lang] validation + children
│   │       ├── page.tsx            # Home
│   │       ├── certifications/
│   │       └── projects/           # List + [slug] detail
│   ├── features/                   # Page sections by domain (home scroll, hero, projects…)
│   │   ├── PageFeature/            # Home wiring (e.g. HomeMain, GSAP horizontal)
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── technologies/
│   │   ├── about-me/
│   │   ├── hobbies/
│   │   └── contact/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header/             # Header, drawer, nav, search, theme, locale
│   │   │   └── Footer.tsx
│   │   └── ui/                     # Reusable UI (cards, PDF viewer, modals…)
│   ├── lib/
│   │   ├── i18n-routing.ts         # Supported locales + helpers (no fs)
│   │   └── theme-cookie.ts          # SSR theme preference / cookie
│   ├── utils/
│   │   ├── i18n.ts                 # Server translations (fs + server-only)
│   │   ├── cn.ts                   # Class name helper
│   │   └── data/                   # Projects, certificates, types
│   ├── assets/                     # Images imported from project data
│   └── proxy.ts                    # Redirect / → /{lang}/ (cookie + Accept-Language)
│
├── docs/
│   ├── es/                         # Spanish docs
│   └── en/                         # English docs
│
├── next.config.ts                  # Next.js configuration
├── eslint.config.mjs             # ESLint (Next + Prettier)
├── postcss.config.mjs            # PostCSS + Tailwind v4
├── prettier.config.mjs           # Prettier + prettier-plugin-tailwindcss
├── tsconfig.json
└── package.json
```

## Code organization

### App Router (`src/app/`)

- Routes under **`/[lang]`** use `generateStaticParams` for es, en, ru, zh.
- **`src/proxy.ts`**: only **`/`** redirects to the preferred locale (same idea as middleware with a narrow `matcher`).
- SEO: `generateMetadata` on relevant pages.

### Components and features

- **`src/features/`**: page sections and domain logic (e.g. `PageFeature/HomeMain.tsx`, GSAP horizontal scroll).
- **`src/components/layout/header/`**: header, mobile drawer, search, locale and theme controls.
- **`src/components/ui/`**: reusable pieces (many as Server Components).
- **`"use client"`** is added where needed (header, UI, blocks under `features/`).

### Data

- **`src/utils/data/`**: project list, certificates, types (`StaticImageData` from `next/image` for featured images).

## Translation system

- **`public/locals/{lang}/*.json`**: keys merged on the server according to `LOCALE_FILES` in `src/utils/i18n.ts` (`common`, `hero`, `certifications`, `info`, `technologies`, `about`, `hobbies`, `footer`).
- **Server**: `getTranslations(lang)` only in server Components / pages (or data serialized to the client).
- **Proxy** (`src/proxy.ts`): redirects `/` and sets the `x-lang` header for server-side `<html lang>`.

## Routes

| Path | Description |
|------|-------------|
| `/` | Redirect (`proxy.ts`) to `/{lang}/` |
| `/{lang}/` | Home |
| `/{lang}/projects` | Project list |
| `/{lang}/projects/[slug]` | Project detail |
| `/{lang}/certifications` | Certifications |
| 404 | `not-found.tsx` |

## Configuration and deployment

- **Typical host**: [Vercel](https://vercel.com/) as a Next.js project (`pnpm build` / `pnpm start`).
- **Reference site**: `https://fravelz.vercel.app/`.
- The previous **Astro** version lives on branch `archive/astro` and tag `astro-v1`.

[Return to readme...](../../README.md)

> AI-generated · Last updated: 2026-05-10
