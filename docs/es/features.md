# Características del portafolio

## Diseño

- **Dark mode** con tema automático / claro / oscuro (script en layout + `localStorage`)
- **Gradientes cyan/púrpura** en títulos y CTAs
- **Responsive**: móvil, tablet y escritorio
- **Animaciones**: GSAP (scroll horizontal, hero entrance, cabecera, 404) y transiciones CSS — islas con
  `next/dynamic` (sin kitchen-sink nuevo)
- **Backdrop blur** en cabecera y overlays
- **Scroll horizontal** (desktop) en proyectos / tecnologías / sobre mí / pasatiempos
- **Design tokens** documentados: [`docs/es/tokens.md`](./tokens.md)

## Honestidad de producto (DoD)

- Badges tipados **`honesty`**: Demo / Piloto / Lab / Privado / Terminado en **card** y **detalle**
- `privateRepo: true` no se vende como OSS completo
- Featured alineados a guías de auditoría (ICFES, Marcadores, Starcrypt, Eco, labs)

## Internacionalización (i18n)

- **4 idiomas**: español, inglés, ruso, chino (`es`, `en`, `ru`, `zh`)
- **Rutas** con prefijo: `/{lang}/…`
- **Redirección en `/`**: cookie `lang` o cabecera `Accept-Language` ([`src/proxy.ts`](../../src/proxy.ts))
- **Traducciones**: JSON en `public/locals/{lang}/` fusionados en servidor (`getTranslations`)
- **`<html lang>`**: fijado en servidor vía cabecera `x-lang`
- **Selector de idioma**: recarga a `/{lang}/`
- Claves nuevas → los **4** idiomas (runbook i18n)

## Funcionalidades interactivas

- **Búsqueda** en el header (empty state sin resultados)
- **Certificados / CV** con visor PDF (`<dialog>`, Escape, restore focus) — sin sandbox restrictivo
- **Tema**: toggle accesible
- **Formulario de contacto**: `mailto:`
- **Timeline “Sobre mí”** con modal “Leer más”
- **Filtros de proyectos** con empty state (`data-testid="projects-filter-empty"`)

## Rendimiento y ops

- **SSG** / App Router con `generateStaticParams` donde aplica
- **RSC** por defecto; **`"use client"`** solo donde hace falta
- **`next/image`** + Tailwind CSS v4
- **Bundle analyzer**: `pnpm analyze` · notas GSAP en audits
- **Sentry** client (sample bajo; no-op sin DSN) — [`docs/ops/sentry.md`](../ops/sentry.md)
- **Runbook** 1 página — [`docs/ops/runbook.md`](../ops/runbook.md)
- **CI**: lint, format, audit, build + **Playwright a11y smoke**

## Secciones principales

- **Presentación**: hero con marca Fravelz, CV PDF, ubicación
- **Proyectos**: grid + detalle por `slug` + honesty badges
- **Tecnologías**: tarjetas por categoría
- **Sobre mí** / **Pasatiempos** / **Contacto**

## Stack técnico

- **Next.js** 16 (App Router) — [ADR 0001](../adr/0001-app-router.md)
- **React** 19 · **TypeScript** · **Tailwind CSS** 4 · **GSAP** 3
- **Playwright** (e2e) · **@sentry/nextjs** · **@next/bundle-analyzer**

## Datos y configuración

- **Proyectos**: `src/utils/data/` (`projects-list.ts`, `project-*.ts`, `project-types.ts`)
- **Traducciones**: `public/locals/` (carpeta real **`locals`**)
- **SEO**: `generateMetadata`, `app/sitemap.ts`, `public/robots.txt`
- **ADRs**: [`docs/adr/`](../adr/)

## Despliegue

- **Recomendado**: [Vercel](https://vercel.com/) con preset Next.js
- **URL**: <https://fravelz.vercel.app/>

[Regresar al readme...](../../README.md)

> Última actualización: 2026-07-15
