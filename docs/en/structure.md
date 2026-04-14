# Project Structure

## Main directories

```text
WEB-Fravelz/
├── public/                         # Static assets (public URL)
│   ├── locals/                     # i18n JSON files (es, en, ru, zh)
│   ├── music/                      # MP3 audio
│   ├── images/                     # Site images
│   ├── i18n.js                     # Client script: data-i18n + language-changed event
│   ├── robots.txt                  # SEO (robots)
│   └── pdfs/                       # Certificate PDFs (referenced from data)
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (theme scripts, i18n.js, global CSS)
│   │   ├── globals.css             # Imports project global styles
│   │   ├── not-found.tsx           # 404 page
│   │   ├── sitemap.ts              # Generated sitemap (/sitemap.xml)
│   │   └── [lang]/                 # Locale-prefixed routes
│   │       ├── layout.tsx          # HtmlLang + children
│   │       ├── page.tsx            # Home
│   │       ├── certifications/
│   │       └── projects/           # List + [slug] detail
│   ├── components/
│   │   ├── features/               # Page sections (hero, projects, about, …)
│   │   ├── header/                 # Header, mobile drawer, nav
│   │   ├── ui/                     # Reusable UI (Footer, NavLink, Particles, …)
│   │   └── ui-react/               # Client components (search, PDF, music, …)
│   ├── lib/
│   │   └── i18n-routing.ts         # Supported locales + helpers (no fs; used in middleware)
│   ├── styles/
│   │   └── global.css              # Tailwind v4 + design tokens
│   ├── utils/
│   │   ├── i18n.ts                 # Server translations (fs + server-only)
│   │   ├── cn.ts                   # Class name helper
│   │   └── data/                   # Projects, certificates, types
│   ├── assets/                     # Images imported from project data
│   └── middleware.ts               # Redirect / → /{lang}/ (cookie + Accept-Language)
│
├── docs/
│   ├── es/                         # Spanish docs
│   └── en/                         # English docs
│
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── prettier.config.mjs
├── tsconfig.json
└── package.json
```

## Code organization

### App Router (`src/app/`)

- Routes under **`/[lang]`** use `generateStaticParams` for es, en, ru, zh.
- **`src/middleware.ts`**: only `/` redirects to the preferred locale.
- SEO: `generateMetadata` on relevant pages.

### Components

- **`src/components/features/`**: home sections and feature-specific logic (e.g. `PageFeature/HomeMain.tsx`, GSAP horizontal scroll).
- **`src/components/header/`**: header, mobile drawer, language select.
- **`src/components/ui/`**: mostly Server Components.
- **`src/components/ui-react/`**: interactive pieces with **`"use client"`**.

### Data

- **`src/utils/data/`**: project list, certificates, types (`StaticImageData` from `next/image` for featured images).

## Translation system

- **`public/locals/{lang}/*.json`**: keys merged according to `LOCALE_FILES` in `src/utils/i18n.ts`.
- **Server**: `getTranslations(lang)` in Server Components / server-only code.
- **Client**: `public/i18n.js` updates `data-i18n` nodes and fires `language-changed`.

## Routes

| Path | Description |
|------|-------------|
| `/` | Middleware redirect to `/{lang}/` |
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

> Author: Fravelz  
> Documentation updated: 2026
