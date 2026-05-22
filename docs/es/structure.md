# Estructura del proyecto

## Directorios principales

```text
WEB-Fravelz/
├── public/                         # Archivos estáticos (URL pública)
│   ├── locals/                     # Traducciones i18n (es, en, ru, zh) — JSON por sección
│   ├── music/                      # Audio MP3
│   ├── images/                     # Imágenes del sitio
│   ├── robots.txt                  # SEO (robots)
│   └── pdfs/                       # PDFs de certificados (referenciados en datos)
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Layout raíz (scripts tema, globals.css, lang en <html>)
│   │   ├── globals.css             # Tailwind v4 + tokens y estilos globales
│   │   ├── not-found.tsx           # Página 404
│   │   ├── sitemap.ts              # Sitemap generado en build (/sitemap.xml)
│   │   └── [lang]/                 # Rutas con prefijo de idioma
│   │       ├── layout.tsx          # Validación de [lang] + children
│   │       ├── page.tsx            # Inicio (home)
│   │       ├── certifications/     # Certificaciones
│   │       └── projects/           # Lista y detalle [slug]
│   ├── features/                   # Secciones por dominio (home scroll, hero, proyectos…)
│   │   ├── PageFeature/            # Orquestación home (p. ej. HomeMain, GSAP horizontal)
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── technologies/
│   │   ├── about-me/
│   │   ├── hobbies/
│   │   └── contact/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header/             # Cabecera, drawer, navegación, búsqueda, tema, idioma
│   │   │   └── Footer.tsx
│   │   └── ui/                     # UI reutilizable (tarjetas, visor PDF, modales…)
│   ├── lib/
│   │   ├── i18n-routing.ts         # Idiomas válidos y helpers sin fs
│   │   └── theme-cookie.ts          # Preferencia de tema SSR / cookie
│   ├── utils/
│   │   ├── i18n.ts                 # Traducciones en servidor (fs + server-only)
│   │   ├── cn.ts                   # Utilidad classnames
│   │   └── data/                   # Proyectos, certificados, tipos
│   ├── assets/                     # Imágenes importadas en datos de proyectos
│   └── proxy.ts                    # Redirección de / → /{lang}/ (cookie + Accept-Language)
│
├── docs/
│   ├── es/                         # Documentación en español
│   └── en/                         # Documentación en inglés
│
├── next.config.ts                  # Configuración de Next.js
├── eslint.config.mjs             # ESLint (Next + Prettier)
├── postcss.config.mjs            # PostCSS + Tailwind v4
├── prettier.config.mjs           # Prettier + prettier-plugin-tailwindcss
├── tsconfig.json
└── package.json
```

## Organización de código

### App Router (`src/app/`)

- Rutas bajo **`/[lang]`** generadas con `generateStaticParams` (es, en, ru, zh).
- **`src/proxy.ts`**: solo la ruta **`/`** redirige al idioma preferido (equivalente a un middleware limitado por `matcher`).
- Metadatos SEO: `generateMetadata` en páginas donde aplica.

### Componentes y features

- **`src/features/`**: secciones de página y lógica por dominio (p. ej. `PageFeature/HomeMain.tsx`, scroll horizontal GSAP).
- **`src/components/layout/header/`**: cabecera, drawer móvil, búsqueda, selector de idioma, tema.
- **`src/components/ui/`**: piezas reutilizables (muchas como Server Components).
- Piezas que requieren **`"use client"`** viven donde haga falta (header, UI, bloques dentro de `features/`).

### Datos

- **`src/utils/data/`**: lista de proyectos, certificados, tipos (`project-types.ts` usa `StaticImageData` de `next/image`).

## Sistema de traducciones

- **`public/locals/{lang}/*.json`**: claves fusionadas en build según `LOCALE_FILES` en `src/utils/i18n.ts` (`common`, `hero`, `music`, `certifications`, `info`, `technologies`, `about`, `hobbies`, `footer`).
- **Servidor**: `getTranslations(lang)` solo en componentes/páginas de servidor (o datos serializados a cliente).
- **Proxy** (`src/proxy.ts`): redirige `/` y fija cabecera `x-lang` para `<html lang>` en servidor.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Redirección (`proxy.ts`) a `/{lang}/` |
| `/{lang}/` | Home |
| `/{lang}/projects` | Listado de proyectos |
| `/{lang}/projects/[slug]` | Detalle de proyecto |
| `/{lang}/certifications` | Certificaciones |
| 404 | `not-found.tsx` |

## Configuración y despliegue

- **Producción típica**: [Vercel](https://vercel.com/) con proyecto Next (build: `pnpm build`, start: `pnpm start`).
- **Sitio de referencia**: `https://fravelz.vercel.app/` (metadatos y enlaces canónicos).
- La versión **Astro** anterior está en la rama `archive/astro` y el tag `astro-v1`.

[Regresar al readme...](../../README.md)

> Generado por IA · Última actualización: 2026-05-10
