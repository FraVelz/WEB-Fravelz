# Estructura del Proyecto

## Directorios Principales

``` text
WEB-Fravelz/
├── public/                    # Archivos estáticos servidos directamente
│   ├── locales/              # Traducciones i18n (es, en, ru, zh)
│   │   ├── es/              # Español
│   │   ├── en/              # Inglés
│   │   ├── ru/              # Ruso
│   │   └── zh/              # Chino
│   ├── music/               # Archivos de audio MP3
│   ├── images/              # Imágenes del portafolio
│   ├── i18n.js              # Script cliente para cambio de idioma
│   ├── robots.txt           # Configuración SEO
│   └── sitemap.xml          # Mapa del sitio
│
├── src/                      # Código fuente
│   ├── components/          # Componentes reutilizables
│   │   ├── layout/          # Componentes de estructura (Header, Footer, etc.)
│   │   │   ├── header/      # Header, ElementsHeader, MobileDrawer
│   │   │   └── home-animation/  # horizontalScroll (GSAP)
│   │   ├── ui/              # Componentes UI básicos (Astro)
│   │   └── ui-react/        # Componentes interactivos (React)
│   ├── features/            # Secciones por feature
│   │   ├── hero/            # HeroSection
│   │   ├── about-me/        # AboutMeSection
│   │   ├── projects/       # ProjectsSection
│   │   ├── technologies/    # TechnologiesSection (data.ts, functions.ts)
│   │   ├── hobbies/         # HobbiesSection
│   │   └── contact/         # ContactSection
│   ├── data/                # Datos compartidos
│   │   ├── projects.ts      # Lista y utilidades de proyectos
│   │   ├── projects/        # Proyectos individuales
│   │   └── certificates.ts  # Certificados
│   ├── layouts/             # Layouts principales
│   ├── pages/               # Páginas y rutas
│   │   ├── index.astro      # Redirección por idioma
│   │   ├── [lang]/          # Rutas por idioma
│   │   └── 404.astro        # Página de error
│   ├── styles/              # Estilos globales
│   └── utils/               # Utilidades
│       ├── i18n.ts          # Sistema de traducciones (servidor)
│       └── lang.ts          # Utilidades de idioma
│
├── docs/                     # Documentación
│   ├── es/                  # Documentación en español
│   └── en/                  # Documentación en inglés
│
├── astro.config.mjs         # Configuración de Astro
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

## Organización de Componentes

### Layout (`src/components/layout/`)

- **Header.astro**: Header fijo con navegación
- **Footer.astro**: Pie de página con enlaces
- **HomeMain.astro**: Contenedor principal del home
- **header/**: ElementsHeader, MobileDrawer
- **home-animation/**: horizontalScroll.ts (GSAP ScrollTrigger)

### Features (`src/features/`)

- **hero/HeroSection.astro**: Sección hero/presentación
- **about-me/AboutMeSection.astro**: Información personal
- **projects/ProjectsSection.astro**: Grid de proyectos
- **technologies/TechnologiesSection.astro**: Tarjetas de tecnologías (usa data.ts, functions.ts)
- **hobbies/HobbiesSection.astro**: Hobbies e intereses
- **contact/ContactSection.astro**: Formulario de contacto

### UI Components (`src/components/ui/`)

- **Link.astro**: Enlace con scroll suave
- **Paragraph.astro**: Párrafo con soporte i18n
- **ToggleTheme.astro**: Selector de tema claro/oscuro
- **LocationBadge.astro**: Badge de ubicación
- **ProjectCard.astro**: Tarjeta de proyecto
- **Button.astro**, **Particles.astro**

### React Components (`src/components/ui-react/`)

- **MusicButton.tsx**: Botón para abrir reproductor
- **MusicPlayer.tsx**: Reproductor de música modal
- **CopyEmailButton.tsx**: Botón para copiar email

## Sistema de Traducciones

- **`public/locales/{lang}/`**: Archivos JSON por idioma
  - `common.json`: Textos comunes y navegación
  - `hero.json`: Sección principal
  - `about.json`: Sobre mí
  - `technologies.json`: Tecnologías
  - `music.json`: Reproductor de música
  - `hobbies.json`: Pasatiempos
  - `footer.json`: Pie de página
  - `info.json`: Títulos de secciones
  - `certifications.json`: Certificaciones

- **`src/utils/i18n.ts`**: Carga traducciones desde `public/locales/` en build time
- **`public/i18n.js`**: Script cliente que actualiza elementos con `data-i18n` al cambiar idioma

### ¿Qué hace `data-i18n`?

`data-i18n` es un atributo `data-*` que guarda una **clave de traducción** (por ejemplo `nav_technologies`). En este repo se usa como "puente" para que el i18n del **lado del cliente** pueda actualizar el DOM sin depender de que todo se renderice de nuevo.

- **Cómo se usa**: el script `public/i18n.js` hace `querySelectorAll('[data-i18n]')`, busca la key, y reemplaza `textContent` (o `innerHTML` si existe `data-i18n-html`).
- **Atributos**: también soporta `data-i18n-attr="attr:key"` para actualizar atributos (por ejemplo `aria-label` o `alt`).
- **Evento**: después de actualizar, dispara el evento `language-changed` para que cualquier JavaScript del cliente (si lo necesitas) pueda reaccionar al cambio de idioma. No depende de React.

**Nota práctica**: si una vista ya renderiza el texto con `{t.algo}` (SSR/SSG), `data-i18n` puede parecer redundante, pero aquí sí tiene utilidad porque habilita sincronización/actualización en cliente y accesibilidad (atributos) de forma consistente.

## Rutas y Páginas

- **`/`**: Redirección a `/{lang}/` según cookie o Accept-Language
- **`/{lang}/`**: Página principal (es, en, ru, zh)
- **`/{lang}/projects`**: Lista de todos los proyectos
- **`/{lang}/projects/[slug]`**: Vista individual de proyecto
- **`/{lang}/certifications`**: Certificaciones
- **`/404`**: Página de error personalizada

## Configuración

- **Site**: `https://fravelz.github.io/WEB-Fravelz/` (configurado en astro.config.mjs)
- **Output**: Static (HTML pre-renderizado)
- **Integrations**: React, Tailwind CSS v4 (@tailwindcss/vite)
- **Animations**: GSAP con ScrollTrigger para scroll horizontal y header

[Regresar al readme...](../../README.md)

> Autor: Fravelz  
> Documentación actualizada: 2026/Feb/20
