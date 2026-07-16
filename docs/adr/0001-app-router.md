# ADR 0001 — App Router (Next.js)

- **Status:** Accepted
- **Date:** 2026-07-15
- **Context:** Portfolio migrated from Astro (`archive/astro`) to Next.js; needs i18n routes, RSC, and Vercel deploy.

## Decision

Use the **Next.js App Router** under `src/app/[lang]/…` with Server Components by default and client islands only where interaction/animation require them.

## Consequences

- **Positive:** `generateStaticParams` / `generateMetadata` per language; colocated layouts; RSC keeps GSAP off the default server graph until client islands load.
- **Positive:** Aligns with Vercel production path and existing CI `pnpm build`.
- **Negative:** Must respect App Router constraints (e.g. no `next/dynamic` + `ssr: false` inside Server Components).
- **Negative:** Learning surface vs Pages Router for contributors.

## Alternatives considered

| Option | Why not |
|--------|---------|
| Pages Router | Legacy for new work; weaker RSC story |
| Stay on Astro | Already archived; less React hiring-demo signal for this personal brand site |
| Remix / other | Extra migration cost; Vercel+Next already fitted |

## References

- [`docs/es/architecture.md`](../es/architecture.md)
- [`src/app/[lang]/layout.tsx`](../../src/app/[lang]/layout.tsx)
- [`src/proxy.ts`](../../src/proxy.ts) — `/` → `/{lang}` redirect
