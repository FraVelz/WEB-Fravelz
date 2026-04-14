# Feedback and roadmap

Improvement ideas and maintenance notes for the **Next.js** portfolio.

---

## Table of contents

- [Feedback and roadmap](#feedback-and-roadmap)
  - [Suggested roadmap](#suggested-roadmap)
  - [Maintenance](#maintenance)
  - [Current data flow](#current-data-flow)

---

## Suggested roadmap

### Performance

- [ ] Optional bundle analysis with `@next/bundle-analyzer`
- [ ] Review images under `public/` and `src/assets/` (modern formats, sizing)
- [ ] Service Worker / PWA (optional)

### Features

- [x] Certificates with PDF viewer (`ui-react`)
- [ ] Blog or articles (new routes under `src/app/[lang]/…`)
- [ ] Contact form with a backend or third-party service (currently `mailto:` only)
- [ ] GitHub API integration for dynamic projects
- [ ] Analytics (e.g. Plausible, Vercel Analytics)

### SEO

- [x] Generated sitemap (`src/app/sitemap.ts` → `/sitemap.xml`)
- [ ] Schema.org JSON-LD in layout or per page
- [ ] Richer per-route Open Graph (dynamic images per project)

### Development

- [ ] Tests (Vitest / Playwright)
- [ ] CI on GitHub Actions (lint + build)
- [ ] Husky + lint-staged (optional)

### UX

- [ ] View transitions (e.g. `template.tsx` or an animation library)
- [ ] Toasts for actions (copy email, errors)

### Internationalization

- [x] Locale URLs `/{lang}/…`
- [x] Initial detection via middleware + cookie
- [ ] RTL if a language requires it

---

## Maintenance

```bash
pnpm update
pnpm audit
pnpm build
pnpm lint
```

- Keep **Next.js** and **React** updated using the official [upgrade guides](https://nextjs.org/docs/app/building-your-application/upgrading).
- After major dependency bumps, run `pnpm build` and review the output.

---

## Current data flow

1. Request to `/{lang}/…`: Next resolves the `[lang]` segment and renders the `app/[lang]/` tree.
2. **Server translations**: `getTranslations(lang)` reads JSON from `public/locals/` (see `LOCALE_FILES` in `src/utils/i18n.ts`).
3. **Components**: Server Components by default; interactivity lives in client components with **`"use client"`** (search, theme, client GSAP, etc.).
4. **Client**: `public/i18n.js` can update `data-i18n` nodes and fire `language-changed` when the legacy client i18n path runs.

[Return to readme...](../../README.md)

> Author: Fravelz
