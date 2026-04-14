# Portafolio de Fravelz

[English version](./README.EN.md)

![Image Portfolio](./public/images/portfolio.png)

Este es el código y documentación de mi portafolio, es mi carta de perfil para las empresas tanto visualmente de la web como la estructuración código limpio y organizado, con la documentation correspondiente y actualizada, de cada cambio al código.

La versión anterior del sitio construida con **Astro** queda archivada en la rama [`archive/astro`](https://github.com/FraVelz/WEB-Fravelz/tree/archive/astro) y en el tag [`astro-v1`](https://github.com/FraVelz/WEB-Fravelz/releases/tag/astro-v1).

Soy fravelz (Francisco Velez), Desarrollador Front-End, mi objetivo es sencillo, ser de los mejores programadores a nivel mundial en frontend, y llegar trabajar en google.

Este portfolio y demás proyectos que estarán en construcción, mejora, y finalización, sera el camino que muestre mi progreso y mis detalles que tengo en cuenta para mi objetivo.

todos los proyectos web modificados, creados, o con ultima modificación en el año 2026, tendrán su documentación en español e ingles, y comentarios y commits del código en ingles, esto haciendo un proyectos multi-lenguaje con el lenguaje principal ingles porque es el estándar internacional en la programación. (esto en cuanto a proyectos personales).

---

## 📋 Tabla de Contenidos

- [Portafolio de Fravelz](#portafolio-de-fravelz)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🛠 Tecnologías](#-tecnologías)
    - [Core](#core)
    - [Herramientas de Desarrollo](#herramientas-de-desarrollo)
    - [Herramientas de Documentación](#herramientas-de-documentación)
  - [✅ Buenas Prácticas Implementadas](#-buenas-prácticas-implementadas)
    - [Rendimiento](#rendimiento)
    - [Accesibilidad](#accesibilidad)
    - [SEO](#seo)
    - [Código](#código)
    - [Características Extras](#características-extras)
  - [🤝 Contribuir](#-contribuir)
  - [📄 Licencia](#-licencia)
  - [👤 Autor](#-autor)

---

## 🛠 Tecnologías

### Core

- **[Next.js](https://nextjs.org/)** (App Router) — framework React con SSG para este portafolio
- **[React](https://react.dev/)** — UI y componentes interactivos
- **[TypeScript](https://www.typescriptlang.org/)** — Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** v4 — Framework CSS utility-first

### Herramientas de Desarrollo

- **pnpm** — Gestor de paquetes rápido
- **Next.js / Turbopack** — `pnpm dev` (por defecto **http://localhost:3000**) y `pnpm build` para producción

### Herramientas de Documentación

- Vscode extension: Markdown All in One
- Vscode extension: Markdownlint
- Vscode extension: Code Spell checker

---

## ✅ Buenas Prácticas Implementadas

### Rendimiento

- ✅ HTML pre-renderizado (App Router / generación estática donde aplica)
- ✅ Server Components por defecto; componentes cliente con `"use client"` solo donde hace falta
- ✅ Lazy loading de componentes React
- ✅ `next/image` para imágenes optimizadas cuando corresponde
- ✅ CSS crítico inline
- ✅ Bundle size razonable

### Accesibilidad

- ✅ Etiquetas semánticas HTML5
- ✅ ARIA labels en elementos interactivos
- ✅ Navegación por teclado
- ✅ Contraste de colores adecuado
- ✅ Textos alternativos en imágenes

### SEO

- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Estructura semántica
- ✅ URLs limpias

### Código

- ✅ TypeScript para type safety
- ✅ Componentes reutilizables
- ✅ Separación de concerns
- ✅ Estructura modular
- ✅ Comentarios descriptivos

### Características Extras

[Ir a la características...](./docs/es/features.md)

---

## 🤝 Contribuir

[Ir a la estructura del proyecto...](./docs/es/structure.md)

[Ir a manual de contribución...](./docs/es/contribution.md)

[Ir a arquitectura...](./docs/es/architecture.md)

[Ir a comentarios...](./docs/es/feedback.md)

---

## 📄 Licencia

MIT - Licencia permisiva de código abierto

---

## 👤 Autor

**Fravelz** - [GitHub](https://github.com/FraVelz) - fravelz@proton.me
