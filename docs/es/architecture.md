# Agregar una Nueva Sección

**1. Crear componente Astro (si es estático):**

```astro
// src/components/astro/NuevaSeccion.astro

import { getTranslations, type Language } from '@/utils/i18n'; interface Props { lang?:
Language; } const { lang = 'es' } = Astro.props; const t = getTranslations(lang);

<section id="nueva-seccion">
  <h2>{t.titulo_nueva_seccion}</h2>
  <!-- Contenido HTML -->
</section>
```

**2. O crear componente React (si necesita interactividad):**

```tsx
// src/components/react/NuevaSeccion.tsx
import { useState } from "react";
import { getTranslations, type Language } from "@/utils/i18n";

export default function NuevaSeccion({ lang = "es" }: { lang?: Language }) {
  const t = getTranslations(lang);
  const [estado, setEstado] = useState(false);

  return <section>{/* Contenido interactivo */}</section>;
}
```

**3. Usar en la página:**

```astro
---
import NuevaSeccion from "../components/astro/NuevaSeccion.astro";
// o para React:
import NuevaSeccion from "../components/react/NuevaSeccion";
---

<NuevaSeccion lang={lang} />
<!-- Si es React, agregar client:load -->
<NuevaSeccion client:load lang={lang} />
```

## Agregar Traducciones

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
const canciones = useMemo(
  () => [
    // ... canciones existentes
    { nombre: t.cancion_nueva, src: getPath("nueva-cancion.mp3") },
  ],
  [t, baseUrl],
);
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
    branches: [main]
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
          cache: "pnpm"
      - run: pnpm install
      - run: pnpm build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"
      - uses: actions/deploy-pages@v4
```

3. **Deploy manual**:

```bash
# Después del build, copiar dist/ a la rama gh-pages
```

## 🌐 Internacionalización (i18n)

### Sistema de Traducciones

El proyecto usa un sistema de traducciones propio basado en archivos JSON.

**Estructura:**

```text
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
import { getTranslations } from "../utils/i18n";
const t = getTranslations("es");
---

<h1>{t.hero_title}</h1>
```

**En React:**

```tsx
import { getTranslations, type Language } from "@/utils/i18n";

export default function Component({ lang = "es" }: { lang?: Language }) {
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

[Regresar al readme...](../../README.md)

> Autor: Fravelz
