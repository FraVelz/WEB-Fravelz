# ✨ Portfolio Features

## 🎨 Design

- **Dark Mode** with support for automatic, light, and dark themes
- **Cyan/Purple gradients** in titles and highlighted elements
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Smooth animations** with GSAP and fluid CSS transitions
- **Backdrop blur** on header and floating elements
- **Horizontal scroll** with GSAP ScrollTrigger for technology sections

## 🌍 Internationalization (i18n)

- **4 languages**: Spanish, English, Русский, 中文
- **Automatic detection** of browser language
- **Dynamic language switching** without page reload
- **Modular translation system** in `public/locales/`
- **Persistence** of selected language in localStorage
- **Full support** for all site texts

## 🎵 Interactive Features

- **Music player** with multiple songs and controls
- **Theme selector** (Auto/Dark/Light) with persistence
- **Language selector** with localStorage persistence
- **Smooth navigation** with automatic scroll to sections
- **Horizontal scroll** with GSAP for technology and project sections
- **Contact form** that opens email client with pre-filled data

## 📱 Responsive

- **Mobile menu** with animated drawer
- **Adaptive grid** for projects and technologies
- **Optimized images** with lazy loading
- **Optimized breakpoints** for all devices

## ⚡ Performance

- **Astro Islands**: Only interactive components (React) are hydrated
- **Static HTML** pre-rendered for better SEO and speed
- **Optimized bundle** with minimal JavaScript
- **Lazy loading** of React components (`client:load`)
- **Critical CSS** inline to prevent FOUC
- **Static build** without server needed

## 🎯 Main Sections

- **Presentation**: Hero section with animated logo and location
- **Projects**: Grid with technology filters and individual view
- **Technologies**: Cards with levels and categories
- **About Me**: Personal information with expandable section
- **Hobbies**: Interests and hobbies
- **Contact**: Form and button to copy email

## 🔧 Technologies Used

- **Astro** v5.16.11 - Modern web framework
- **React** v19.1.1 - Interactive components
- **TypeScript** - Static typing
- **Tailwind CSS** v3.4.19 - Utility-first styles
- **GSAP** v3.14.2 - Advanced animations
- **Vite** - Build tool (included in Astro)

## 📦 Data Structure

- **Projects**: Defined in `src/data/projects.ts` with multi-language support
- **Translations**: Organized by section in `public/locales/{lang}/`
- **Configuration**: Centralized in `astro.config.mjs` and `tailwind.config.mjs`

## 🚀 Deploy

- **GitHub Pages** with base path `/WEB-Fravelz/`
- **Static build** without server needed
- **CI/CD** with GitHub Actions (`.github/workflows/`)

[Return to readme...](../../README.md)

> Author: Fravelz  
> Documentation updated: 2026/Feb/17  
> AI-generated vision.
