# WEB-Fravelz - Portafolio Personal

Portafolio web personal moderno construido con **Astro**, **React**, **TypeScript** y **Tailwind CSS**. Diseñado con un enfoque en rendimiento, accesibilidad y experiencia de usuario.

![Astro](https://img.shields.io/badge/Astro-5.16.11-FF5D01?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Desarrollo](#-desarrollo)
- [Build y Deploy](#-build-y-deploy)
- [Internacionalización (i18n)](#-internacionalización-i18n)
- [Arquitectura](#-arquitectura)
- [Mejores Prácticas Implementadas](#-mejores-prácticas-implementadas)
- [Roadmap y Mejoras Futuras](#-roadmap-y-mejoras-futuras)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## ✨ Características

### 🎨 Diseño

- **Dark Mode** con soporte para tema automático, claro y oscuro
- **Gradientes Cyan/Purple** en títulos y elementos destacados
- **Diseño Responsive** optimizado para móvil, tablet y desktop
- **Animaciones suaves** y transiciones fluidas
- **Backdrop blur** en header y modales

### 🌍 Internacionalización

- **4 idiomas**: Español, English, Русский, 中文
- **Detección automática** del idioma desde la URL
- **Sistema de traducciones** modular y fácil de mantener

### 🎵 Funcionalidades Interactivas

- **Reproductor de música** con múltiples canciones
- **Selector de tema** (Auto/Dark/Light)
- **Selector de idioma** con persistencia
- **Navegación suave** con scroll automático
- **Modales informativos** para contenido expandido

### 📱 Responsive

- **Menú móvil** con drawer animado
- **Grid adaptativo** para proyectos y tecnologías
- **Imágenes optimizadas** y lazy loading

### ⚡ Rendimiento

- **Astro Islands**: Solo se hidratan componentes interactivos
- **HTML estático** pre-renderizado para mejor SEO
- **Bundle optimizado** con mínimo JavaScript
- **Lazy loading** de componentes React

---

## 🛠 Tecnologías

### Core

- **[Astro](https://astro.build/)** v5.16.11 - Framework web moderno
- **[React](https://react.dev/)** v19.1.1 - Biblioteca UI para componentes interactivos
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** v3.4.17 - Framework CSS utility-first

### Integraciones

- **@astrojs/react** - Integración de React en Astro
- **@astrojs/tailwind** - Integración de Tailwind CSS
- **Font Awesome** - Iconos vectoriales

### Herramientas de Desarrollo

- **pnpm** - Gestor de paquetes rápido
- **Vite** - Build tool (incluido en Astro)
- **ESLint** - Linter de código

---

## 📁 Estructura del Proyecto

``` text
WEB-Fravelz/
├── public/                    # Archivos estáticos
│   ├── canciones/            # Archivos de audio
│   ├── imagenes/             # Imágenes del proyecto
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── astro/           # Componentes estáticos (HTML puro)
│   │   │   ├── PresentacionSection.astro
│   │   │   ├── TecnologiasSection.astro
│   │   │   └── PasatiemposSection.astro
│   │   │
│   │   └── react/           # Componentes interactivos (React islands)
│   │       ├── Header.tsx
│   │       ├── MusicPlayer.tsx
│   │       ├── ThemeSelector.tsx
│   │       ├── LanguageSelector.tsx
│   │       ├── SobreMiSection.tsx
│   │       └── ProyectosHackingSection.tsx
│   │
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   │
│   ├── pages/
│   │   └── index.astro      # Página principal
│   │
│   ├── locales/             # Traducciones i18n
│   │   ├── es/              # Español
│   │   ├── en/              # English
│   │   ├── ru/              # Русский
│   │   └── zh/              # 中文
│   │
│   ├── utils/
│   │   └── i18n.ts          # Sistema de traducciones
│   │
│   └── index.css            # Estilos globales
│
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.mjs       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

---

## 🚀 Instalación

### Prerrequisitos

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recomendado) o npm/yarn

### Pasos

**1. Clonar el repositorio:**

``` bash
git clone https://github.com/FraVelz/WEB-Fravelz.git
cd WEB-Fravelz
```

**2. Instalar dependencias:**

``` bash
pnpm install
# o
npm install
```

**3. Iniciar servidor de desarrollo:**

``` bash
pnpm dev
```

El sitio estará disponible en `http://localhost:4321/`.

---

## 📜 Scripts Disponibles

| Script         | Descripción                                    |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Inicia servidor de desarrollo con hot-reload   |
| `pnpm build`   | Genera build de producción optimizado          |
| `pnpm preview` | Previsualiza el build de producción localmente |
| `pnpm astro`   | Ejecuta comandos de Astro CLI                  |

---

## 💻 Desarrollo

### Agregar una Nueva Sección

**1. Crear componente Astro (si es estático):**

```astro
// src/components/astro/NuevaSeccion.astro
---
import { getTranslations, type Language } from '../../utils/i18n';

interface Props {
  lang?: Language;
}

const { lang = 'es' } = Astro.props;
const t = getTranslations(lang);
---

<section id="nueva-seccion">
  <h2>{t.titulo_nueva_seccion}</h2>
  <!-- Contenido HTML -->
</section>
```

**2. O crear componente React (si necesita interactividad):**

```tsx
// src/components/react/NuevaSeccion.tsx
import { useState } from 'react';
import { getTranslations, type Language } from '../../utils/i18n';

export default function NuevaSeccion({ lang = 'es' }: { lang?: Language }) {
  const t = getTranslations(lang);
  const [estado, setEstado] = useState(false);
  
  return (
    <section>
      {/* Contenido interactivo */}
    </section>
  );
}
```

**3. Usar en la página:**

```astro
---
import NuevaSeccion from '../components/astro/NuevaSeccion.astro';
// o para React:
import NuevaSeccion from '../components/react/NuevaSeccion';
---

<NuevaSeccion lang={lang} />
<!-- Si es React, agregar client:load -->
<NuevaSeccion client:load lang={lang} />
```

### Agregar Traducciones

1. **Editar archivos JSON** en `src/locales/{idioma}/`:

```json
// src/locales/es/common.json
{
  "nueva_clave": "Texto en español"
}

// src/locales/en/common.json
{
  "nueva_clave": "Text in English"
}
```

2. **Usar en componentes**:
```tsx
const t = getTranslations(lang);
// Acceder: t.nueva_clave
```

### Agregar una Nueva Canción

1. **Agregar archivo MP3** a `public/canciones/`
2. **Agregar traducción** en `src/locales/{idioma}/music.json`:
```json
{
  "cancion_nueva": "Nombre de la Canción"
}
```
3. **Actualizar** `src/components/react/MusicPlayer.tsx`:
```tsx
const canciones = useMemo(() => [
  // ... canciones existentes
  { nombre: t.cancion_nueva, src: getPath('nueva-cancion.mp3') },
], [t, baseUrl]);
```

---

## 🏗 Build y Deploy

### Build de Producción

```bash
pnpm build
```

El build se genera en `dist/` con HTML estático optimizado.

### Deploy en GitHub Pages

El proyecto está configurado para GitHub Pages con base path `/WEB-Fravelz/`.

1. **Build del proyecto**
```bash
pnpm build
```

2. **Configurar GitHub Actions** (opcional, recomendado):
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - uses: actions/deploy-pages@v4
```

3. **Deploy manual**:
```bash
# Después del build, copiar dist/ a la rama gh-pages
```

### Otros Servicios de Deploy

- **Vercel**: `vercel --prod`
- **Netlify**: Arrastrar carpeta `dist/` o conectar repositorio
- **Cloudflare Pages**: Conectar repositorio y configurar build command

---

## 🌐 Internacionalización (i18n)

### Sistema de Traducciones

El proyecto usa un sistema de traducciones propio basado en archivos JSON.

**Estructura:**
```
src/locales/
├── es/          # Español (idioma por defecto)
├── en/          # English
├── ru/          # Русский
└── zh/          # 中文
```

**Archivos por idioma:**
- `common.json` - Textos comunes (navegación, botones)
- `hero.json` - Sección de presentación
- `music.json` - Reproductor de música
- `technologies.json` - Tecnologías
- `projects.json` - Proyectos
- `about.json` - Sobre mí
- `hobbies.json` - Pasatiempos
- `certifications.json` - Certificaciones
- `info.json` - Títulos de secciones

### Uso en Componentes

**En Astro:**
```astro
---
import { getTranslations } from '../utils/i18n';
const t = getTranslations('es');
---

<h1>{t.hero_title}</h1>
```

**En React:**
```tsx
import { getTranslations, type Language } from '../../utils/i18n';

export default function Component({ lang = 'es' }: { lang?: Language }) {
  const t = getTranslations(lang);
  return <h1>{t.hero_title}</h1>;
}
```

### Agregar un Nuevo Idioma

1. **Crear carpeta** `src/locales/{codigo}/`
2. **Copiar estructura** de `src/locales/es/`
3. **Traducir todos los archivos JSON**
4. **Actualizar** `src/utils/i18n.ts`:
```ts
import {nuevoIdioma}Common from '../locales/{codigo}/common.json';
// ... otros imports

const translations = {
  // ... idiomas existentes
  {codigo}: {
    ...{nuevoIdioma}Common,
    // ... otros archivos
  },
};
```

---

## 🏛 Arquitectura

### Astro Islands Architecture

El proyecto usa **Astro Islands** para optimizar el rendimiento:

- **Componentes Astro** (`.astro`): HTML estático, 0 JavaScript
- **Componentes React** (`.tsx` con `client:load`): Solo se hidratan cuando es necesario

**Ventajas:**
- ✅ Menor bundle size
- ✅ Mejor rendimiento inicial
- ✅ Mejor SEO
- ✅ Carga más rápida

### Estructura de Componentes

```
Componentes Estáticos (Astro)
├── PresentacionSection.astro
├── TecnologiasSection.astro
└── PasatiemposSection.astro

Componentes Interactivos (React)
├── Header.tsx              (client:load)
├── MusicPlayer.tsx         (client:load)
├── ThemeSelector.tsx       (client:load)
├── LanguageSelector.tsx    (client:load)
├── SobreMiSection.tsx      (client:load)
└── ProyectosHackingSection.tsx (client:load)
```

### Flujo de Datos

1. **Página Astro** (`index.astro`) detecta idioma de URL
2. **Carga traducciones** desde `utils/i18n.ts`
3. **Renderiza componentes estáticos** como HTML
4. **Hidrata componentes React** solo donde se necesita

---

## ✅ Mejores Prácticas Implementadas

### Rendimiento
- ✅ HTML estático pre-renderizado
- ✅ Lazy loading de componentes React
- ✅ Imágenes optimizadas
- ✅ CSS crítico inline
- ✅ Bundle size mínimo

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

---

## 🗺 Roadmap y Mejoras Futuras

### Mejoras de Rendimiento
- [ ] Optimización de imágenes con `@astrojs/image`
- [ ] Implementar lazy loading de imágenes
- [ ] Code splitting más granular
- [ ] Service Worker para cache offline
- [ ] Preload de recursos críticos

### Funcionalidades
- [ ] Sistema de certificaciones con visualizador PDF
- [ ] Blog o sección de artículos
- [ ] Formulario de contacto funcional
- [ ] Integración con API de GitHub para proyectos
- [ ] Analytics (Plausible, Google Analytics)
- [ ] Dark/Light mode toggle visual mejorado

### SEO y Marketing
- [ ] Schema.org markup (JSON-LD)
- [ ] Open Graph images dinámicas
- [ ] Sitemap generado automáticamente
- [ ] RSS feed para blog (si se implementa)
- [ ] Integración con Google Search Console

### Desarrollo
- [ ] Tests unitarios (Vitest)
- [ ] Tests E2E (Playwright)
- [ ] CI/CD con GitHub Actions
- [ ] Pre-commit hooks (Husky)
- [ ] Storybook para componentes
- [ ] Documentación de componentes

### UX/UI
- [ ] Animaciones de entrada (Framer Motion)
- [ ] Transiciones de página
- [ ] Loading states mejorados
- [ ] Error boundaries
- [ ] Toast notifications
- [ ] Mejor feedback visual en interacciones

### Internacionalización
- [ ] Detección automática de idioma del navegador
- [ ] Persistencia de idioma en localStorage
- [ ] URLs multi-idioma (`/es/`, `/en/`, etc.)
- [ ] RTL support para idiomas que lo requieran

---

## 🎯 Consejos y Recomendaciones

### Mantenimiento

1. **Actualizar dependencias regularmente**
```bash
pnpm update
pnpm audit
```

2. **Revisar bundle size**
```bash
pnpm build
# Revisar dist/ para ver tamaño de archivos
```

3. **Optimizar imágenes antes de agregarlas**
   - Usar formatos modernos (WebP, AVIF)
   - Comprimir imágenes
   - Tamaños apropiados para cada breakpoint

### Mejoras de Código

1. **Extraer constantes**
   - URLs, textos repetidos, configuraciones
   - Crear `src/utils/constants.ts`

2. **Tipos compartidos**
   - Crear `src/types/index.ts` para interfaces comunes

3. **Hooks personalizados**
   - `useTheme.ts` - Lógica de tema
   - `useLanguage.ts` - Lógica de idioma
   - `useScroll.ts` - Scroll behavior

4. **Validación de datos**
   - Validar props de componentes
   - Validar traducciones (evitar keys faltantes)

### Optimizaciones

1. **Font Awesome**
   - Considerar usar solo los iconos necesarios
   - O migrar a iconos SVG inline

2. **CSS**
   - Revisar clases duplicadas
   - Usar `@apply` de Tailwind para componentes comunes

3. **Imágenes**
   - Implementar lazy loading
   - Usar `srcset` para responsive images
   - Considerar CDN para assets

### Seguridad

1. **Variables de entorno**
   - No commitear secrets
   - Usar `.env` para configuraciones sensibles

2. **Dependencias**
   - Revisar vulnerabilidades: `pnpm audit`
   - Mantener dependencias actualizadas

3. **Content Security Policy**
   - Implementar CSP headers
   - Restringir fuentes de scripts

---

## 📊 Métricas y Análisis

### Herramientas Recomendadas

1. **Lighthouse CI**
   - Integrar en CI/CD
   - Monitorear métricas de rendimiento

2. **Web Vitals**
   - LCP, FID, CLS
   - Integrar con Google Analytics

3. **Bundle Analyzer**
   - Analizar tamaño de bundle
   - Identificar oportunidades de optimización

---

## 🤝 Contribuir

Este es un proyecto personal, pero las sugerencias y mejoras son bienvenidas:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Notas Adicionales

### Archivos Importantes

- `DESIGN_GUIDE.md` - Guía completa de diseño visual
- `MIGRATION_README.md` - Documentación de migración a Astro
- `src/locales/README.md` - Guía de traducciones

### Comandos Útiles

```bash
# Limpiar build
rm -rf dist .astro

# Verificar tipos TypeScript
pnpm astro check

# Analizar bundle (si se instala)
pnpm add -D @astrojs/analyzer
pnpm astro build --analyze
```

---

## 📄 Licencia

Este proyecto es personal y privado. Todos los derechos reservados.

---

## 👤 Autor

**Fravelz** - [GitHub](https://github.com/FraVelz) - fravelz@proton.me

---

## 🙏 Agradecimientos

- [Astro](https://astro.build/) por el framework increíble
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [Font Awesome](https://fontawesome.com/) por los iconos
- Comunidad open source

---

**Última actualización:** 2026 Jan 19

**Versión:** 2.0.0 (Astro Migration)
