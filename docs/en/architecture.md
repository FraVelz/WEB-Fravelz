# Architecture and development guide (Next.js)

How to extend the portfolio after the **Next.js** (App Router) migration.

---

## Add a new section to the home page

1. **Server Component (default)**  
   Add `src/components/features/<name>/<Name>Section.tsx` that receives `lang` and uses `getTranslations` from `@/utils/i18n`.

2. **Client Component** (state, GSAP, DOM listeners)  
   Add **`"use client"`** at the top, or split interactive UI into a small client child.

3. **Wire it on the home**  
   Import the section in [`src/components/features/PageFeature/HomeMain.tsx`](../../src/components/features/PageFeature/HomeMain.tsx) in the desired order (keep `.horizontal` / `.panel` structure if it participates in horizontal scroll on desktop).

---

## Translations

1. Edit JSON files under **`public/locals/{es,en,ru,zh}/`** and keep keys in sync across languages.
2. If you add a new JSON file name, append it to **`LOCALE_FILES`** in [`src/utils/i18n.ts`](../../src/utils/i18n.ts).
3. In Server Components: `getTranslations(lang)` (wrapped with React `cache`).
4. **`public/i18n.js`** still updates `data-i18n` nodes on the client.

---

## Add a new language

1. Create `public/locals/<code>/` by copying the `es/` layout.
2. Extend the **`Language`** type and **`languages`** array in [`src/lib/i18n-routing.ts`](../../src/lib/i18n-routing.ts).
3. Ensure [`src/app/[lang]/layout.tsx`](../../src/app/[lang]/layout.tsx) includes the new locale in `generateStaticParams` (it should follow `languages`).

---

## Build and deploy

### Development

```bash
pnpm install
pnpm dev
```

Default URL: **http://localhost:3000** (Turbopack).

### Production locally

```bash
pnpm build
pnpm start
```

Output: **`.next/`** (not a static `dist/` folder).

### Recommended: Vercel

- Framework preset: **Next.js**
- Build: `pnpm build`
- Connect the GitHub repo for automatic deployments from `main`

### Production URL

- **https://fravelz.vercel.app/**

### Archived Astro version

- Branch: [`archive/astro`](https://github.com/FraVelz/WEB-Fravelz/tree/archive/astro)  
- Tag: [`astro-v1`](https://github.com/FraVelz/WEB-Fravelz/releases/tag/astro-v1)

---

## i18n stack (summary)

| Layer | Role |
|-------|------|
| `src/middleware.ts` | Redirects `/` using `lang` cookie or `Accept-Language`. |
| `src/lib/i18n-routing.ts` | Supported locales and validation (Edge-safe). |
| `src/utils/i18n.ts` | Loads JSON from `public/locals/` on the server. |
| `public/i18n.js` | Client updates and events for legacy `data-i18n` usage. |

[Return to readme...](../../README.md)

> Author: Fravelz
