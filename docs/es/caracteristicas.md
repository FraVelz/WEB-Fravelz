# ✨ Características del Portafolio

## 🎨 Diseño

- **Dark Mode** con soporte para tema automático, claro y oscuro
- **Gradientes Cyan/Purple** en títulos y elementos destacados
- **Diseño Responsive** optimizado para móvil, tablet y desktop
- **Animaciones suaves** con GSAP y transiciones CSS fluidas
- **Backdrop blur** en header y elementos flotantes
- **Scroll horizontal** con GSAP ScrollTrigger para secciones de tecnologías

## 🌍 Internacionalización (i18n)

- **4 idiomas**: Español, English, Русский, 中文
- **Detección automática** del idioma del navegador
- **Cambio dinámico** de idioma sin recargar la página
- **Sistema de traducciones** modular en `public/locales/`
- **Persistencia** del idioma seleccionado en localStorage
- **Soporte completo** para todos los textos del sitio

## 🎵 Funcionalidades Interactivas

- **Reproductor de música** con múltiples canciones y controles
- **Selector de tema** (Auto/Dark/Light) con persistencia
- **Selector de idioma** con persistencia en localStorage
- **Navegación suave** con scroll automático a secciones
- **Scroll horizontal** con GSAP para secciones de tecnologías y proyectos
- **Formulario de contacto** que abre el cliente de correo con datos pre-rellenados

## 📱 Responsive

- **Menú móvil** con drawer animado
- **Grid adaptativo** para proyectos y tecnologías
- **Imágenes optimizadas** con lazy loading
- **Breakpoints** optimizados para todos los dispositivos

## ⚡ Rendimiento

- **Astro Islands**: Solo se hidratan componentes interactivos (React)
- **HTML estático** pre-renderizado para mejor SEO y velocidad
- **Bundle optimizado** con mínimo JavaScript
- **Lazy loading** de componentes React (`client:load`)
- **CSS crítico** inline para evitar FOUC
- **Build estático** sin servidor necesario

## 🎯 Secciones Principales

- **Presentación**: Hero section con logo animado y ubicación
- **Proyectos**: Grid con filtros por tecnología y vista individual
- **Tecnologías**: Tarjetas con niveles y categorías
- **Sobre Mí**: Información personal con sección desplegable
- **Pasatiempos**: Intereses y hobbies
- **Contacto**: Formulario y botón para copiar email

## 🔧 Tecnologías Utilizadas

- **Astro** v5.16.11 - Framework web moderno
- **React** v19.1.1 - Componentes interactivos
- **TypeScript** - Tipado estático
- **Tailwind CSS** v3.4.19 - Estilos utility-first
- **GSAP** v3.14.2 - Animaciones avanzadas
- **Vite** - Build tool (incluido en Astro)

## 📦 Estructura de Datos

- **Proyectos**: Definidos en `src/data/projects.ts` con soporte multi-idioma
- **Traducciones**: Organizadas por sección en `public/locales/{lang}/`
- **Configuración**: Centralizada en `astro.config.mjs` y `tailwind.config.mjs`

## 🚀 Deploy

- **GitHub Pages** con base path `/WEB-Fravelz/`
- **Build estático** sin necesidad de servidor
- **CI/CD** con GitHub Actions (`.github/workflows/`)

[Regresar al readme...](https://github.com/FraVelz/WEB-Fravelz)

> Autor: Fravelz  
> Documentación actualizada: 2026
