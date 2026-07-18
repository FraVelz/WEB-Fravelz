# Project architecture

A **conceptual** view of the portfolio: technical choices, reusable building blocks, data flow, and deployment. The
**directory tree** and concrete routes are in [Project structure](./structure.md).

---

## Table of contents

- [Project architecture](#project-architecture)
  - [Technology stack](#technology-stack)
  - [Application model (App Router)](#application-model-app-router)
  - [Internationalization](#internationalization)
  - [Light / dark theme](#light--dark-theme)
  - [Data layer](#data-layer)
  - [Components and client / server split](#components-and-client--server-split)
  - [Cross-cutting utilities](#cross-cutting-utilities)
  - [SEO and metadata](#seo-and-metadata)
  - [Network configuration](#network-configuration)
  - [Build and deployment](#build-and-deployment)
  - [Extending the project](#extending-the-project)

---

## Technology stack

| Area | Choice                                              |
| ---- | --------------------------------------------------- |
| Framework | **Next.js 16** (App Router, Turbopack with `pnpm dev`) |
| UI | **React 19**                                    |
| Language | **TypeScript**                              |
| Styling | **Tailwind CSS v4** (`globals.css`, tokens, utilities) |
| Images | **`next/image`** (optional **`sharp`** in production) |
| Animation | **GSAP** in client components (e.g. scroll / home) |
| Utility packages | **clsx**, **tailwind-merge**, **server-only** |
| Package manager | **pnpm**                                 |

---

## Application model (App Router)

- Content pages live under the dynamic segment **`[lang]`**; each supported language is precomputed with
  **`generateStaticParams`** in [`src/app/[lang]/layout.tsx`](../../src/app/[lang]/layout.tsx), aligned with the typed
  language list in code.
- **Server Components by default**: initial HTML carries translations and data resolved on the server whenever possible.
- The **site root** must send users to a language: redirect logic for **`/`** based on the `lang` cookie and the
  **`Accept-Language`** header lives in [`src/proxy.ts`](../../src/proxy.ts) (same shape as a Next.js edge middleware:
  `matcher` only for `/`).

---

## Internationalization

### On the server (source of truth for copy and SEO)

- [`src/utils/i18n.ts`](../../src/utils/i18n.ts): reads and merges JSON from `public/locals/{es,en,ru,zh}/` according to
  **`LOCALE_FILES`**, with **`server-only`** and **`fs`** during server compilation and runtime.
- **`getTranslations`**: wrapped in React **`cache`** to deduplicate dictionary loading within the same request.
- **`t(key, lang)`**: direct key lookup, falling back to the key itself.

**Routing / language contract (no `fs`, safe for the edge)**

- [`src/lib/i18n-routing.ts`](../../src/lib/i18n-routing.ts): **`Language`** type, **`languages`** array,
  **`isValidLanguage`**, **`localePathFromAcceptHeader`** to pick a locale from `Accept-Language`.

### Language header

- [`src/proxy.ts`](../../src/proxy.ts) reads the `/[lang]/` segment and forwards `x-lang` to the root layout for `<html
  lang>`.

---

## Light / dark theme

- **Preference** `dark` | `light` | `auto` (`theme` cookie, aligned with **`localStorage`** via script in
  [`src/app/layout.tsx`](../../src/app/layout.tsx)).
- **First paint on the server**: [`src/lib/theme-cookie.ts`](../../src/lib/theme-cookie.ts) exposes
  **`getServerHtmlThemeFromCookieAndHint`**, combining the cookie value with the **`Sec-CH-Prefers-Color-Scheme`**
  Client Hint when preference is `auto`.
- **Next**: [`next.config.ts`](../../next.config.ts) sets **`Accept-CH`** / **`Critical-CH`**, and **`Vary`** for that
  hint so initial HTML can reflect color scheme without unnecessary flash when the browser cooperates.
- **Hydration**: a **`beforeInteractive`** script in the root layout applies classes on `<html>`, `data-theme`, and
  `colorScheme` consistently with the saved preference.

---

## Data layer

### Projects

- Types: [`src/utils/data/project-types.ts`](../../src/utils/data/project-types.ts) (**`Project`**,
  **`ProductHonestyBadge`**, multi-language fields, `StaticImageData` for `next/image`).
- **`honesty` field**: typed badges (`demo` | `piloto` | `lab` | `privado` | `terminado`) on card and detail —
  anti-polish contract (plan 11 / mid wave).
- **`project-*.ts` files**: one module per project; aggregated list in **`projects-list.ts`**.
- Stable API via [`src/utils/data/projects.ts`](../../src/utils/data/projects.ts) and
  [`src/utils/data/project-utils.ts`](../../src/utils/data/project-utils.ts):
  - **`getAllProjects`**, **`getProjectBySlug`**, **`getFeaturedProjects`**, **`getProjectsByCategory`**,
    **`getAllTechnologies`**.
- Typical consumers: project pages, sitemap, home blocks, and **header search** (in-memory indexing from the same list).

### Certificates

- Types and grouping in [`src/utils/data/certificates.ts`](../../src/utils/data/certificates.ts) (**`Certificate`**,
  **`groupCertificates`** with issuer/category rules and validation that each item lands in a single bucket).
- PDF viewer: same-origin + embeddable CSP; **no** restrictive iframe `sandbox` ([ADR 0003](../adr/0003-no-pdf-iframe-sandbox.md)).

---

## Components and client / server split

- **`"use client"`** only where needed: local state, DOM listeners, GSAP animations, PDF viewers / modals, interactive
  forms, etc.
- **Home sections** and layout are composed from **`src/features/`** and **`src/components/`** (header, footer, cards);
  **horizontal scroll** and GSAP logic live in dedicated client modules (e.g. `HomeScroll` and related scripts).
- Goal: **small client JS islands** and **data and strings resolved on the server** when possible.

---

## Cross-cutting utilities

| Piece | Location | Role |
| ----- | -------- | ---- |
| **`cn(...)`** | [`src/utils/cn.ts`](../../src/utils/cn.ts) | Merge classes with **clsx** and resolve Tailwind conflicts with **tailwind-merge**. |
| **Translations** | [`src/utils/i18n.ts`](../../src/utils/i18n.ts) | **`getTranslations`**, **`t`**, re-exports language routing helpers. |
| **Locale in URL** | [`src/lib/i18n-routing.ts`](../../src/lib/i18n-routing.ts) | Locale list and validation with no disk reads. |
| **SSR theme / cookie** | [`src/lib/theme-cookie.ts`](../../src/lib/theme-cookie.ts) | Preference parsing, initial HTML, client cookie serialization. |

---

## SEO and metadata

- **`metadata` and `metadataBase`** on the root layout pointing at the production domain (e.g.
  `https://fravelz.vercel.app`).
- **`src/app/sitemap.ts`**: emits entries per language, project listing routes, and each **`Project`** slug, reusing
  **`getAllProjects`** and **`languages`** so routes are not hand-duplicated.

---

## Network configuration

- Security headers in **`next.config.ts`** via [`security-headers.ts`](../../security-headers.ts): CSP, HSTS (prod),
  color Client Hints. **`/pdfs/*`** uses `embeddable: true` ([ADR 0002](../adr/0002-pdfs-csp-embed.md)).
- Sentry allowlist (`*.ingest.sentry.io`, CDN) when a DSN is set.
- **`robots.txt`** and static assets under **`public/`** (images, PDFs) served as static files.

---

## Build and deployment

### Development

```bash
pnpm install
pnpm dev
```

Default URL: **<http://localhost:3000>** (Turbopack).

### Production locally

```bash
pnpm build
pnpm start
```

Output in **`.next/`**.

### Bundle analysis

```bash
pnpm analyze
```

GSAP cut notes: [`docs/audits/bundle-gsap-2026-07-15.md`](../audits/bundle-gsap-2026-07-15.md).

### Quality / CI

| Check | Command / job |
|-------|----------------|
| Lint + Prettier + audit + build | `.github/workflows/ci.yml` → `quality` |
| Playwright a11y smoke | `e2e-a11y` · `pnpm test:e2e` |
| Sentry client | [`docs/ops/sentry.md`](../ops/sentry.md) (no-op without DSN) |
| Runbook | [`docs/ops/runbook.md`](../ops/runbook.md) |
| ADRs | [`docs/adr/`](../adr/) |

### Recommended deployment: Vercel

- **Next.js** preset, **`pnpm build`**, connect the repo for deploys from **`main`**.
- Reference URL: **<https://fravelz.vercel.app/>**

### Previous version (Astro)

- Branch [`archive/astro`](https://github.com/FraVelz/WEB-Fravelz/tree/archive/astro) and tag
  [`astro-v1`](https://github.com/FraVelz/WEB-Fravelz/releases/tag/astro-v1).

---

## Extending the project

For adding home sections, translation keys, or a new language, follow the practical steps in [Structure](./structure.md)
and [Features](./features.md); feedback and how to contribute are described in
[Contribution](./contribution.md#ways-to-contribute). Hard decisions: [ADRs](../adr/).

[Return to readme...](../../README.md)

> Last updated: 2026-07-15 (mid wave — analyzer, Sentry, ADRs, e2e CI)
