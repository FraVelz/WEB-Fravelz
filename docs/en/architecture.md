# Adding a New Section

**1. Create Astro component (if static):**

```astro
// src/components/astro/NewSection.astro
---
import { getTranslations, type Language } from '@/utils/i18n';

interface Props {
  lang?: Language;
}

const { lang = 'es' } = Astro.props;
const t = getTranslations(lang);
---

<section id="new-section">
  <h2>{t.new_section_title}</h2>
  <!-- HTML content -->
</section>
```

**2. Or create React component (if it needs interactivity):**

```tsx
// src/components/react/NewSection.tsx
import { useState } from 'react';
import { getTranslations, type Language } from '@/utils/i18n';

export default function NewSection({ lang = 'es' }: { lang?: Language }) {
  const t = getTranslations(lang);
  const [state, setState] = useState(false);
  
  return (
    <section>
      {/* Interactive content */}
    </section>
  );
}
```

**3. Use on the page:**

```astro
---
import NewSection from '../components/astro/NewSection.astro';
// or for React:
import NewSection from '../components/react/NewSection';
---

<NewSection lang={lang} />
<!-- If React, add client:load -->
<NewSection client:load lang={lang} />
```

## Adding Translations

1. **Edit JSON files** in `public/locales/{language}/`:

```json
// public/locales/es/common.json
{
  "new_key": "Text in Spanish"
}

// public/locales/en/common.json
{
  "new_key": "Text in English"
}
```

2. **Use in components**:

```tsx
const t = getTranslations(lang);
// Access: t.new_key
```

### Adding a New Song

1. **Add MP3 file** to `public/music/`
2. **Add translation** in `public/locales/{language}/music.json`:

```json
{
  "new_song": "Song Name"
}
```

3. **Update** `src/components/ui-react/MusicPlayer.tsx`:

```tsx
const songs = useMemo(() => [
  // ... existing songs
  { name: t.new_song, src: getPath('new-song.mp3') },
], [t, baseUrl]);
```

---

## 🏗 Build and Deploy

### Production Build

```bash
pnpm build
```

The build is generated in `dist/` with optimized static HTML.

### Deploy to GitHub Pages

The project is configured for GitHub Pages with base path `/WEB-Fravelz/`.

1. **Build the project**

```bash
pnpm build
```

2. **Configure GitHub Actions** (optional, recommended):

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

3. **Manual deploy**:

```bash
# After build, copy dist/ to gh-pages branch
```

## 🌐 Internationalization (i18n)

### Translation System

The project uses a custom translation system based on JSON files.

**Structure:**

``` text
public/locales/
├── es/          # Spanish (default language)
├── en/          # English
├── ru/          # Русский
└── zh/          # 中文
```

**Files per language:**

- `common.json` - Common texts (navigation, buttons)
- `hero.json` - Presentation section
- `music.json` - Music player
- `technologies.json` - Technologies
- `projects.json` - Projects
- `about.json` - About me
- `hobbies.json` - Hobbies
- `certifications.json` - Certifications
- `info.json` - Section titles

### Usage in Components

**In Astro:**

```astro
---
import { getTranslations } from '../utils/i18n';
const t = getTranslations('es');
---

<h1>{t.hero_title}</h1>
```

**In React:**

```tsx
import { getTranslations, type Language } from '@/utils/i18n';

export default function Component({ lang = 'es' }: { lang?: Language }) {
  const t = getTranslations(lang);
  return <h1>{t.hero_title}</h1>;
}
```

### Adding a New Language

1. **Create folder** `public/locales/{code}/`
2. **Copy structure** from `public/locales/es/`
3. **Translate all JSON files**
4. **Update** `src/utils/i18n.ts`:

``` ts
// Add new language to the loadLocale / translations logic
// (e.g. include the new code in the Language type and in the translations object)
```

[Return to readme...](../../README.md)

> Author: Fravelz
