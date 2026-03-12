# Project Structure

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
│   │   │   ├── header/      # Header, ElementsHeader, MobileDrawer
│   │   │   └── home-animation/  # horizontalScroll (GSAP)
│   │   ├── ui/              # Basic UI components (Astro)
│   │   └── ui-react/        # Interactive components (React)
│   ├── features/            # Sections by feature
│   │   ├── hero/            # HeroSection
│   │   ├── about-me/        # AboutMeSection
│   │   ├── projects/        # ProjectsSection
│   │   ├── technologies/    # TechnologiesSection (data.ts, functions.ts)
│   │   ├── hobbies/         # HobbiesSection
│   │   └── contact/         # ContactSection
│   ├── data/                # Shared data
│   │   ├── projects.ts      # Projects list and utilities
│   │   ├── projects/        # Individual projects
│   │   └── certificates.ts # Certificates
│   ├── layouts/             # Main layouts
│   ├── pages/               # Pages and routes
│   │   ├── index.astro      # Language redirect
│   │   ├── [lang]/          # Language-specific routes
│   │   └── 404.astro        # Error page
│   ├── styles/              # Global styles
│   └── utils/               # Utilities
│       ├── i18n.ts          # Translation system (server)
│       └── lang.ts          # Language utilities
│
├── docs/                     # Documentation
│   ├── es/                  # Spanish documentation
│   └── en/                  # English documentation
│
├── astro.config.mjs         # Astro configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Component Organization

### Layout (`src/components/layout/`)
- **Header.astro**: Fixed header with navigation
- **Footer.astro**: Footer with links
- **HomeMain.astro**: Main home container
- **header/**: ElementsHeader, MobileDrawer
- **home-animation/**: horizontalScroll.ts (GSAP ScrollTrigger)

### Features (`src/features/`)
- **hero/HeroSection.astro**: Hero/presentation section
- **about-me/AboutMeSection.astro**: Personal information
- **projects/ProjectsSection.astro**: Projects grid
- **technologies/TechnologiesSection.astro**: Technology cards (uses data.ts, functions.ts)
- **hobbies/HobbiesSection.astro**: Hobbies and interests
- **contact/ContactSection.astro**: Contact form

### UI Components (`src/components/ui/`)
- **Link.astro**: Link with smooth scroll
- **Paragraph.astro**: Paragraph with i18n support
- **ToggleTheme.astro**: Light/dark theme selector
- **LocationBadge.astro**: Location badge
- **ProjectCard.astro**: Project card
- **Button.astro**, **Particles.astro**

### React Components (`src/components/ui-react/`)
- **MusicButton.tsx**: Button to open player
- **MusicPlayer.tsx**: Modal music player
- **CopyEmailButton.tsx**: Button to copy email

## Translation System

- **`public/locales/{lang}/`**: JSON files per language
  - `common.json`: Common texts and navigation
  - `hero.json`: Main section
  - `about.json`: About me
  - `technologies.json`: Technologies
  - `music.json`: Music player
  - `hobbies.json`: Hobbies
  - `footer.json`: Footer
  - `info.json`: Section titles
  - `certifications.json`: Certifications

- **`src/utils/i18n.ts`**: Loads translations from `public/locales/` at build time
- **`public/i18n.js`**: Client script that updates elements with `data-i18n` on language change

## Routes and Pages

- **`/`**: Redirects to `/{lang}/` based on cookie or Accept-Language
- **`/{lang}/`**: Home page (es, en, ru, zh)
- **`/{lang}/projects`**: All projects list
- **`/{lang}/projects/[slug]`**: Individual project view
- **`/{lang}/certifications`**: Certifications
- **`/404`**: Custom error page

## Configuration

- **Site**: `https://fravelz.github.io/WEB-Fravelz/` (configured in astro.config.mjs)
- **Output**: Static (pre-rendered HTML)
- **Integrations**: React, Tailwind CSS v4 (@tailwindcss/vite)
- **Animations**: GSAP with ScrollTrigger for horizontal scroll and header

[Return to readme...](../../README.md)

> Author: Fravelz  
> Documentation updated: 2026/Feb/20
