# Arquitectura del proyecto

Visión **conceptual** del portafolio: decisiones técnicas, piezas reutilizables, flujo de datos y despliegue. El **árbol
de carpetas** y las rutas concretas están en [Estructura del proyecto](./structure.md).

---

## Índice

- [Arquitectura del proyecto](#arquitectura-del-proyecto)
  - [Stack tecnológico](#stack-tecnológico)
  - [Modelo de aplicación (App Router)](#modelo-de-aplicación-app-router)
  - [Internacionalización](#internacionalización)
  - [Tema claro / oscuro](#tema-claro--oscuro)
  - [Capa de datos](#capa-de-datos)
  - [Componentes y separación cliente / servidor](#componentes-y-separación-cliente--servidor)
  - [Utilidades transversales](#utilidades-transversales)
  - [SEO y metadatos](#seo-y-metadatos)
  - [Configuración de red](#configuración-de-red)
  - [Build y despliegue](#build-y-despliegue)
  - [Ampliar el proyecto](#ampliar-el-proyecto)

---

## Stack tecnológico

| Área | Elección |
|------|----------|
| Framework | **Next.js 16** (App Router, Turbopack en `pnpm dev`) |
| UI | **React 19** |
| Lenguaje | **TypeScript** |
| Estilos | **Tailwind CSS v4** (`globals.css`, tokens y utilidades) — ver [Design tokens](./tokens.md) |
| Imágenes | **`next/image`** (y `sharp` opcional en producción) |
| Animación | **GSAP** en componentes cliente (p. ej. scroll / home) |
| Paquetes de utilidad | **clsx**, **tailwind-merge**, **server-only** |
| Gestión de dependencias | **pnpm** |

---

## Modelo de aplicación (App Router)

- Las páginas con contenido viven bajo el segmento dinámico **`[lang]`**; cada idioma soportado se precalcula con
  **`generateStaticParams`** en [`src/app/[lang]/layout.tsx`](../../src/app/[lang]/layout.tsx), alineado con la lista
  tipada de idiomas en código.
- **Server Components por defecto**: el HTML inicial lleva traducciones y datos resueltos en servidor cuando es posible.
- La **raíz del sitio** debe llevar al usuario a un idioma: la lógica de redirección de **`/`** según cookie `lang` y
  cabecera **`Accept-Language`** está concentrada en [`src/proxy.ts`](../../src/proxy.ts) (mismo patrón que un
  middleware de borde de Next: `matcher` solo para `/`).

---

## Internacionalización

### En servidor (fuente de verdad para copy y SEO)

- [`src/utils/i18n.ts`](../../src/utils/i18n.ts): lee y fusiona los JSON de `public/locals/{es,en,ru,zh}/` según la
  lista **`LOCALE_FILES`**, con **`server-only`** y **`fs`** en tiempo de servidor (compilación y runtime).
- **`getTranslations`**: envuelto en **`cache` de React** para deduplicar la carga del diccionario dentro de la misma
  petición.
- **`t(key, lang)`**: acceso directo a una clave con fallback a la propia clave.

**Contrato de rutas e idiomas (sin `fs`, usable en borde)**

- [`src/lib/i18n-routing.ts`](../../src/lib/i18n-routing.ts): tipo **`Language`**, array **`languages`**,
  **`isValidLanguage`**, **`localePathFromAcceptHeader`** para elegir locale desde `Accept-Language`.

### Cabecera de idioma

- [`src/proxy.ts`](../../src/proxy.ts) detecta el segmento `/[lang]/` y pasa `x-lang` al layout raíz para `lang` en
  `<html>`.

---

## Tema claro / oscuro

- **Preferencia** `dark` | `light` | `auto` (cookie `theme`, y alineación con **`localStorage`** vía script en
  [`src/app/layout.tsx`](../../src/app/layout.tsx)).
- **Primer paint en servidor**: [`src/lib/theme-cookie.ts`](../../src/lib/theme-cookie.ts) expone
  **`getServerHtmlThemeFromCookieAndHint`**, que combina el valor de la cookie con el **Client Hint**
  `Sec-CH-Prefers-Color-Scheme` cuando la preferencia es `auto`.
- **Next**: [`next.config.ts`](../../next.config.ts) declara cabeceras **`Accept-CH`** / **`Critical-CH`** y **`Vary`**
  para ese hint, de modo que el HTML inicial pueda reflejar el esquema sin parpadeo innecesario cuando el navegador
  colabora.
- **Hidratación**: script **`beforeInteractive`** en el layout aplica clase en `<html>`, `data-theme` y `colorScheme` de
  forma coherente con la preferencia guardada.

---

## Capa de datos

### Proyectos

- Tipos: [`src/utils/data/project-types.ts`](../../src/utils/data/project-types.ts) (**`Project`**,
  **`ProductHonestyBadge`**, campos multilenguaje, `StaticImageData` para `next/image`).
- Campo **`honesty`**: badges tipados (`demo` | `piloto` | `lab` | `privado` | `terminado`) en card y detalle —
  contrato anti-maquillaje (plan 11 / oleada mid).
- Ficheros **`project-*.ts`**: un módulo por proyecto; la lista agregada en **`projects-list.ts`**.
- API estable vía [`src/utils/data/projects.ts`](../../src/utils/data/projects.ts) y
  [`src/utils/data/project-utils.ts`](../../src/utils/data/project-utils.ts):
  - **`getAllProjects`**, **`getProjectBySlug`**, **`getFeaturedProjects`**, **`getProjectsByCategory`**,
    **`getAllTechnologies`**.
- Consumidores típicos: páginas de proyectos, sitemap, bloques de la home y **búsqueda en cabecera** (indexación en
  memoria a partir de la misma lista).

### Certificaciones

- Tipos y agrupación en [`src/utils/data/certificates.ts`](../../src/utils/data/certificates.ts) (**`Certificate`**,
  **`groupCertificates`** con reglas de negocio por emisor/categoría y validación de que cada ítem cae en un solo
  bucket).
- Visor PDF: mismo origen + CSP embeddable; **sin** `sandbox` restrictivo en el iframe ([ADR 0003](../adr/0003-no-pdf-iframe-sandbox.md)).

---

## Componentes y separación cliente / servidor

- **`"use client"`** solo donde hace falta: estado local, listeners del DOM, animaciones GSAP, visores PDF/modales,
  formularios interactivos, etc.
- Las **secciones de la home** y el layout se componen desde **`src/features/`** y **`src/components/`** (cabecera, pie,
  tarjetas); la lógica de **scroll horizontal** y GSAP vive en módulos cliente dedicados (p. ej. `HomeScroll`, scripts
  asociados).
- Objetivo: **mínima isla de JavaScript** en cliente y **datos y strings resueltos en servidor** cuando sea posible.

---

## Utilidades transversales

| Pieza | Ubicación | Función |
|-------|-----------|---------|
| **`cn(...)`** | [`src/utils/cn.ts`](../../src/utils/cn.ts) | Combina clases con **clsx** y resuelve conflictos de Tailwind con **tailwind-merge**. |
| **Traducciones** | [`src/utils/i18n.ts`](../../src/utils/i18n.ts) | **`getTranslations`**, **`t`**, re-exporta helpers de routing de idioma. |
| **Idioma en URL** | [`src/lib/i18n-routing.ts`](../../src/lib/i18n-routing.ts) | Lista de locales y validación sin lectura de disco. |
| **Tema SSR / cookie** | [`src/lib/theme-cookie.ts`](../../src/lib/theme-cookie.ts) | Parsing de preferencia, HTML inicial, serialización de cookie en cliente. |

---

## SEO y metadatos

- **`metadata` y `metadataBase`** en el layout raíz apuntando al dominio de producción (p. ej.
  `https://fravelz.vercel.app`).
- **`src/app/sitemap.ts`**: genera entradas por idioma, listados de proyectos y **slug** de cada **`Project`**,
  reutilizando **`getAllProjects`** y **`languages`** para no duplicar rutas a mano.

---

## Configuración de red

- Cabeceras de seguridad en **`next.config.ts`** vía [`security-headers.ts`](../../security-headers.ts): CSP, HSTS
  (prod), Client Hints de color. Rutas **`/pdfs/*`** usan `embeddable: true` ([ADR 0002](../adr/0002-pdfs-csp-embed.md)).
- Allowlist Sentry (`*.ingest.sentry.io`, CDN) cuando hay DSN.
- **`robots.txt`** y activos estáticos bajo **`public/`** (imágenes, PDFs) servidos como archivos estáticos.

---

## Build y despliegue

### Desarrollo

```bash
pnpm install
pnpm dev
```

URL habitual: **<http://localhost:3000>** (Turbopack).

### Producción en local

```bash
pnpm build
pnpm start
```

Salida en **`.next/`**.

### Análisis de bundle

```bash
pnpm analyze
```

Notas de recorte GSAP: [`docs/audits/bundle-gsap-2026-07-15.md`](../audits/bundle-gsap-2026-07-15.md).

### Calidad / CI

| Check | Comando / job |
|-------|----------------|
| Lint + Prettier + audit + build | `.github/workflows/ci.yml` → job `quality` |
| Playwright a11y smoke | job `e2e-a11y` · `pnpm test:e2e` |
| Sentry client | [`docs/ops/sentry.md`](../ops/sentry.md) (no-op sin DSN) |
| Runbook | [`docs/ops/runbook.md`](../ops/runbook.md) |
| ADRs | [`docs/adr/`](../adr/) |

### Despliegue recomendado: Vercel

- Preset **Next.js**, comando de build **`pnpm build`**, conexión al repositorio para despliegues desde **`main`**.
- URL de referencia: **<https://fravelz.vercel.app/>**

### Versión anterior (Astro)

- Rama [`archive/astro`](https://github.com/FraVelz/WEB-Fravelz/tree/archive/astro) y tag
  [`astro-v1`](https://github.com/FraVelz/WEB-Fravelz/releases/tag/astro-v1).

---

## Ampliar el proyecto

Para añadir secciones en la home, claves de traducción o un idioma nuevo, los pasos prácticos siguen siendo los de
[Estructura](./structure.md) y [Características](./features.md); el **feedback** y cómo contribuir se describen en
[Contribución](./contribution.md#formas-de-contribuir). Decisiones duras: [ADRs](../adr/).

[Regresar al readme...](../../README.md)

> Última actualización: 2026-07-15 (oleada mid — analyzer, Sentry, ADRs, e2e CI)
