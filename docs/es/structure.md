# 📁 Estructura del Proyecto

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
│   │   ├── sections/        # Secciones principales (Astro)
│   │   ├── ui/              # Componentes UI básicos (Astro)
│   │   └── ui-react/        # Componentes interactivos (React)
│   ├── data/                # Datos y configuraciones
│   │   ├── projects.ts     # Lista de proyectos
│   │   └── projects/       # Proyectos individuales
│   ├── layouts/             # Layouts principales
│   ├── pages/               # Páginas y rutas
│   │   ├── index.astro      # Página principal
│   │   ├── projects/        # Páginas de proyectos
│   │   └── 404.astro        # Página de error
│   ├── scripts-animations/  # Scripts de animación (GSAP)
│   ├── styles/              # Estilos globales
│   └── utils/               # Utilidades y helpers
│       ├── i18n.ts          # Sistema de traducciones (servidor)
│       ├── i18n-client.ts    # Sistema de traducciones (cliente)
│       ├── paths.ts          # Utilidades de rutas
│       └── lang.ts           # Utilidades de idioma
│
├── docs/                     # Documentación
│   └── es/                  # Documentación en español
│
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.mjs      # Configuración de Tailwind CSS
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

## Organización de Componentes

### Layout (`src/components/layout/`)

- **Header.astro**: Header fijo con navegación
- **Footer.astro**: Pie de página con enlaces
- **HomeMain.astro**: Contenedor principal del home
- **header/**: Componentes del header (ElementsHeader, MobileDrawer)

### Sections (`src/components/sections/`)

- **PresentacionSection.astro**: Sección hero/presentación
- **ProyectosSection.astro**: Grid de proyectos con filtros
- **TecnologiasSection.astro**: Tarjetas de tecnologías
- **SobreMiSection.astro**: Información personal
- **PasatiemposSection.astro**: Hobbies e intereses
- **Contactame.astro**: Formulario de contacto

### UI Components (`src/components/ui/`)

- **Enlace.astro**: Enlace con scroll suave
- **Parrafo.astro**: Párrafo con soporte i18n
- **ToggleTheme.astro**: Selector de tema claro/oscuro
- **LocationBadge.astro**: Badge de ubicación
- **ProjectCard.astro**: Tarjeta de proyecto
- **Line.astro**: Divisor visual

### React Components (`src/components/ui-react/`)

- **MusicButton.tsx**: Botón para abrir reproductor
- **MusicPlayer.tsx**: Reproductor de música modal
- **CopyEmailButton.tsx**: Botón para copiar email
- **TecnologiasSection.tsx**: (Legacy - migrado a Astro)

## Sistema de Traducciones

- **`public/locales/{lang}/`**: Archivos JSON por idioma
  - `common.json`: Textos comunes y navegación
  - `hero.json`: Sección principal
  - `about.json`: Sobre mí
  - `projects.json`: Proyectos
  - `technologies.json`: Tecnologías
  - `music.json`: Reproductor de música
  - `hobbies.json`: Pasatiempos
  - `footer.json`: Pie de página
  - `info.json`: Títulos de secciones
  - `certifications.json`: Certificaciones

- **`src/utils/i18n.ts`**: Carga traducciones desde `public/locales/` en build time
- **`public/i18n.js`**: Script cliente que actualiza elementos con `data-i18n` al cambiar idioma

## Rutas y Páginas

- **`/`**: Página principal (index.astro)
- **`/projects`**: Lista de todos los proyectos
- **`/projects/[slug]`**: Vista individual de proyecto
- **`/404`**: Página de error personalizada

## Configuración

- **Base path**: `/WEB-Fravelz/` (configurado en `astro.config.mjs`)
- **Output**: Static (HTML pre-renderizado)
- **Integrations**: React, Tailwind CSS
- **Animations**: GSAP con ScrollTrigger para scroll horizontal y header

[Regresar al readme...](../../README.md)

> Autor: Fravelz  
> Documentación actualizada: 2026/Feb/17  
> Vision generada por IA
