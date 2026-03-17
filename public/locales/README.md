# Locales / Internationalization (i18n)

Translation files for the Fravelz portfolio, organized by language and section.

## Supported Languages

| Code | Language          |
| ---- | ----------------- |
| `es` | Spanish (Español) |
| `en` | English           |
| `ru` | Russian (Русский) |
| `zh` | Chinese (中文)    |

## File Structure

Each language folder (`es/`, `en/`, `ru/`, `zh/`) contains the same set of JSON files:

| File                  | Description                                     |
| --------------------- | ----------------------------------------------- |
| `common.json`         | Common texts, navigation, and shared UI strings |
| `hero.json`           | Main hero section content                       |
| `music.json`          | Music player and selector                       |
| `certifications.json` | Certifications and training section             |
| `info.json`           | Section titles and info labels                  |
| `technologies.json`   | Technologies and skills                         |
| `about.json`          | About me (biography and story)                  |
| `hobbies.json`        | Hobbies and interests                           |
| `footer.json`         | Footer content and links                        |

## How It Works

- **Build time:** `src/utils/i18n.ts` loads translations from these JSON files for server-side rendering.
- **Client side:** `public/i18n.js` fetches and merges locale files when the user changes language.
- Elements with `data-i18n="key_name"` are automatically updated with the translated text.

## Adding or Updating Translations

1. Add or edit the key in all language files to keep them in sync.
2. Use the Spanish (`es/`) files as the reference when adding new keys.
3. Keys are merged across all JSON files per language, so the same key in different files will be overwritten (last wins).
