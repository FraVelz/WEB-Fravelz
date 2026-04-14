# Estructura del Proyecto

## Directorios principales

```text
WEB-Fravelz/
├── public/                         # Archivos estáticos (URL pública)
│   ├── locals/                     # Traducciones i18n (es, en, ru, zh) — JSON por sección
│   ├── music/                      # Audio MP3
│   ├── images/                     # Imágenes del sitio
│   ├── i18n.js                     # Script cliente: data-i18n y evento language-changed
│   ├── robots.txt                  # SEO (robots)
│   └── pdfs/                       # PDFs de certificados (referenciados en datos)
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Layout raíz (scripts tema, i18n.js, estilos globales)
│   │   ├── globals.css             # Importa estilos globales del proyecto
│   │   ├── not-found.tsx           # Página 404
│   │   ├── sitemap.ts              # Sitemap generado en build (/sitemap.xml)
│   │   └── [lang]/                 # Rutas con prefijo de idioma
│   │       ├── layout.tsx          # HtmlLang + children
│   │       ├── page.tsx            # Inicio (home)
│   │       ├── certifications/     # Certificaciones
│   │       └── projects/           # Lista y detalle [slug]
│   ├── components/
│   │   ├── features/               # Secciones (hero, proyectos, about, etc.)
│   │   ├── header/                 # Header, drawer, navegación
│   │   ├── ui/                     # UI reutilizable (Footer, NavLink, Particles…)
│   │   └── ui-react/               # Componentes cliente (búsqueda, PDF, música…)
│   ├── lib/
│   │   └── i18n-routing.ts         # Idiomas válidos y helpers sin fs (middleware)
│   ├── styles/
│   │   └── global.css              # Tailwind v4 + tokens y utilidades del diseño
│   ├── utils/
│   │   ├── i18n.ts                 # Traducciones en servidor (fs + server-only)
│   │   ├── cn.ts                   # Utilidad classnames
│   │   └── data/                   # Proyectos, certificados, tipos
│   ├── assets/                     # Imágenes importadas en datos de proyectos
│   └── middleware.ts               # Redirección de / → /{lang}/ (cookie + Accept-Language)
│
├── docs/
│   ├── es/                         # Documentación en español
│   └── en/                         # Documentación en inglés
│
├── next.config.ts                  # Configuración de Next.js
├── eslint.config.mjs               # ESLint (Next + Prettier)
├── postcss.config.mjs              # PostCSS + Tailwind v4
├── prettier.config.mjs             # Prettier + prettier-plugin-tailwindcss
├── tsconfig.json
└── package.json
```

## Organización de código

### App Router (`src/app/`)

- Rutas bajo **`/[lang]`** generadas con `generateStaticParams` (es, en, ru, zh).
- **`middleware.ts`** en la raíz de `src/`: solo la ruta `/` redirige al idioma preferido.
- Metadatos SEO: `generateMetadata` en páginas donde aplica.

### Componentes

- **`src/components/features/`**: secciones de la home y lógica por feature (p. ej. `PageFeature/HomeMain.tsx`, scroll horizontal GSAP).
- **`src/components/header/`**: cabecera, drawer móvil, selector de idioma.
- **`src/components/ui/`**: piezas presentacionales (muchas como Server Components).
- **`src/components/ui-react/`**: piezas que requieren **`"use client"`** (estado, DOM, GSAP en cliente).

### Datos

- **`src/utils/data/`**: lista de proyectos, certificados, tipos (`project-types.ts` usa `StaticImageData` de `next/image`).

## Sistema de traducciones

- **`public/locals/{lang}/*.json`**: claves fusionadas en build según `LOCALE_FILES` en `src/utils/i18n.ts` (`common`, `hero`, `music`, `certifications`, `info`, `technologies`, `about`, `hobbies`, `footer`).
- **Servidor**: `getTranslations(lang)` solo en componentes/páginas de servidor (o datos serializados a cliente).
- **Cliente**: `public/i18n.js` actualiza nodos con `data-i18n` y dispara `language-changed` para componentes que lo escuchan.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Redirección (middleware) a `/{lang}/` |
| `/{lang}/` | Home |
| `/{lang}/projects` | Listado de proyectos |
| `/{lang}/projects/[slug]` | Detalle de proyecto |
| `/{lang}/certifications` | Certificaciones |
| 404 | `not-found.tsx` |

## Configuración y despliegue

- **Producción típica**: [Vercel](https://vercel.app/) con proyecto Next (build: `pnpm build`, start: `pnpm start`).
- **Sitio de referencia**: `https://fravelz.vercel.app/` (metadatos y enlaces canónicos).
- La versión **Astro** anterior está en la rama `archive/astro` y el tag `astro-v1`.

[Regresar al readme...](../../README.md)

> Autor: Fravelz  
> Documentación actualizada: 2026
