# 📁 Project Structure

## Main Directories

``` text
WEB-Fravelz/
├── public/                    # Static files served directly
│   ├── locales/              # i18n translations (es, en, ru, zh)
│   │   ├── es/              # Spanish
│   │   ├── en/              # English
│   │   ├── ru/              # Russian
│   │   └── zh/              # Chinese
│   ├── music/               # MP3 audio files
│   ├── images/              # Portfolio images
│   ├── i18n.js              # Client script for language switching
│   ├── robots.txt           # SEO configuration
│   └── sitemap.xml          # Site map
│
├── src/                      # Source code
│   ├── components/          # Reusable components
│   │   ├── layout/          # Structure components (Header, Footer, etc.)
│   │   ├── sections/        # Main sections (Astro)
│   │   ├── ui/              # Basic UI components (Astro)
│   │   └── ui-react/        # Interactive components (React)
│   ├── data/                # Data and configurations
│   │   ├── projects.ts     # Projects list
│   │   └── projects/       # Individual projects
│   ├── layouts/             # Main layouts
│   ├── pages/               # Pages and routes
│   │   ├── index.astro      # Home page
│   │   ├── projects/        # Project pages
│   │   └── 404.astro        # Error page
│   ├── scripts-animations/  # Animation scripts (GSAP)
│   ├── styles/              # Global styles
│   └── utils/               # Utilities and helpers
│       ├── i18n.ts          # Translation system (server)
│       ├── i18n-client.ts    # Translation system (client)
│       ├── paths.ts          # Path utilities
│       └── lang.ts           # Language utilities
│
├── docs/                     # Documentation
│   ├── es/                  # Spanish documentation
│   └── en/                  # English documentation
│
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Component Organization

### Layout (`src/components/layout/`)
- **Header.astro**: Fixed header with navigation
- **Footer.astro**: Footer with links
- **HomeMain.astro**: Main home container
- **header/**: Header components (ElementsHeader, MobileDrawer)

### Sections (`src/components/sections/`)
- **PresentacionSection.astro**: Hero/presentation section
- **ProyectosSection.astro**: Projects grid with filters
- **TecnologiasSection.astro**: Technology cards
- **SobreMiSection.astro**: Personal information
- **PasatiemposSection.astro**: Hobbies and interests
- **Contactame.astro**: Contact form

### UI Components (`src/components/ui/`)
- **Enlace.astro**: Link with smooth scroll
- **Parrafo.astro**: Paragraph with i18n support
- **ToggleTheme.astro**: Light/dark theme selector
- **LocationBadge.astro**: Location badge
- **ProjectCard.astro**: Project card
- **Line.astro**: Visual divider

### React Components (`src/components/ui-react/`)
- **MusicButton.tsx**: Button to open player
- **MusicPlayer.tsx**: Modal music player
- **CopyEmailButton.tsx**: Button to copy email
- **TecnologiasSection.tsx**: (Legacy - migrated to Astro)

## Translation System

- **`public/locales/{lang}/`**: JSON files per language
  - `common.json`: Common texts and navigation
  - `hero.json`: Main section
  - `about.json`: About me
  - `projects.json`: Projects
  - `technologies.json`: Technologies
  - `music.json`: Music player
  - `hobbies.json`: Hobbies
  - `footer.json`: Footer
  - `info.json`: Section titles
  - `certifications.json`: Certifications

- **`src/utils/i18n.ts`**: Loads translations from `public/locales/` at build time
- **`public/i18n.js`**: Client script that updates elements with `data-i18n` on language change

## Routes and Pages

- **`/`**: Home page (index.astro)
- **`/projects`**: All projects list
- **`/projects/[slug]`**: Individual project view
- **`/404`**: Custom error page

## Configuration

- **Base path**: `/WEB-Fravelz/` (configured in `astro.config.mjs`)
- **Output**: Static (pre-rendered HTML)
- **Integrations**: React, Tailwind CSS
- **Animations**: GSAP with ScrollTrigger for horizontal scroll and header

> Author: Fravelz  
> Documentation updated: 2026/Feb/17  
> AI-generated vision.
