# Locales / Internationalization (i18n)

Translation files for the Fravelz portfolio. The folder name is **`locals`** (not `locales`) and matches the path used in [`src/utils/i18n.ts`](../../src/utils/i18n.ts).

## Supported languages

| Code | Language |
| ---- | -------- |
| `es` | Spanish (Español) |
| `en` | English |
| `ru` | Russian (Русский) |
| `zh` | Chinese (中文) |

## File layout

Each language directory (`es/`, `en/`, `ru/`, `zh/`) should expose the same logical set of JSON files. The app merges these files **in order** defined by `LOCALE_FILES` in `src/utils/i18n.ts`:

`common`, `hero`, `music`, `certifications`, `info`, `technologies`, `about`, `hobbies`, `footer`.

Typical files include:

| File | Contents |
| ---- | -------- |
| `common.json` | Navigation, shared UI |
| `hero.json` | Hero / presentation |
| `music.json` | Music player strings |
| `certifications.json` | Certifications page |
| `info.json` | Section titles |
| `technologies.json` | Tech section |
| `about.json` | About / biography |
| `hobbies.json` | Hobbies |
| `footer.json` | Footer |

If the same key appears in more than one file for a language, **the last merged file wins**.

## How it works

- **Server (Next.js):** at build/request time, `getTranslations(lang)` reads and merges the JSON files from `public/locals/<lang>/`.
- **Client:** [`public/i18n.js`](../i18n.js) updates elements with `data-i18n` and related attributes when the user changes language from the legacy client flow; it can dispatch `language-changed` for components that listen.

## Adding or changing strings

1. Add or edit the key in **all** language folders so keys stay aligned.
2. Use `es/` as the reference when introducing new keys.
3. Prefer short, stable key names (e.g. `nav_projects`).
