# Características del portafolio

## Diseño

- **Dark mode** con tema automático / claro / oscuro (script en layout + `localStorage`)
- **Gradientes cyan/púrpura** en títulos y CTAs
- **Responsive**: móvil, tablet y escritorio
- **Animaciones**: GSAP (scroll horizontal en paneles, header, 404) y transiciones CSS
- **Backdrop blur** en cabecera y overlays
- **Scroll horizontal** (desktop) en el bloque de proyectos / tecnologías / sobre mí / hobbies

## Internacionalización (i18n)

- **4 idiomas**: español, inglés, ruso, chino (`es`, `en`, `ru`, `zh`)
- **Rutas** con prefijo: `/{lang}/…`
- **Middleware** en `/`: cookie `lang` o cabecera `Accept-Language`
- **Traducciones**: JSON en `public/locals/{lang}/` fusionados en servidor (`src/utils/i18n.ts`)
- **Cliente**: `public/i18n.js` para `data-i18n` y evento `language-changed`
- **Selector de idioma**: navega a la misma ruta en otro locale (recarga de página)

## Funcionalidades interactivas

- **Búsqueda** en el header (portfolio y traducciones vía fetch a `public/locals/`)
- **Certificados** con visor PDF (componentes cliente)
- **Reproductor de música** (opcional / componentes existentes)
- **Tema**: toggle accesible
- **Formulario de contacto**: `mailto:` con cuerpo generado en cliente
- **Timeline “Sobre mí”** con modal “Leer más” (lógica en cliente)

## Rendimiento

- **SSG**: páginas pre-renderizadas con `generateStaticParams` donde aplica
- **React Server Components** por defecto; **`"use client"`** solo donde hace falta
- **`next/image`** para imágenes optimizadas cuando se usa el componente `Image`
- **Tailwind CSS v4** con PostCSS
- **Bundle**: código dividido por rutas y límites cliente/servidor de Next

## Secciones principales

- **Presentación**: hero con logo y ubicación
- **Proyectos**: grid y página de detalle por `slug`
- **Tecnologías**: tarjetas con niveles (datos en `src/components/features/technologies/data.ts`)
- **Sobre mí**: línea de tiempo + modal
- **Pasatiempos**: grid de tarjetas con efecto de cursor
- **Contacto**: email y formulario mailto

## Stack técnico

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4
- **GSAP** 3

## Datos y configuración

- **Proyectos**: `src/utils/data/` (`projects-list.ts`, `project-*.ts`, `project-types.ts`)
- **Traducciones**: `public/locals/` (no usar el nombre `locales` en rutas; la carpeta real es **`locals`**)
- **SEO**: `generateMetadata`, `app/sitemap.ts`, `public/robots.txt`

## Despliegue

- **Recomendado**: [Vercel](https://vercel.com/) con preset Next.js
- **URL**: https://fravelz.vercel.app/

[Regresar al readme...](../../README.md)

> Autor: Fravelz · Documentación actualizada: 2026
