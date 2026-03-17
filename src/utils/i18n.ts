// i18n system for Astro - loads from public/locales (single source of truth)

type Language = 'es' | 'en' | 'ru' | 'zh';

const LOCALE_FILES = [
  'common',
  'hero',
  'music',
  'certifications',
  'info',
  'technologies',
  'about',
  'hobbies',
  'footer',
] as const;

async function loadLocale(lang: Language): Promise<Record<string, string>> {
  const out: Record<string, string> = {};

  for (const name of LOCALE_FILES) {
    try {
      const data = await import(`../assets/locales/${lang}/${name}.json`);
      Object.assign(out, data);

    } catch {
       console.warn(`No se encontró el archivo: ${lang}/${name}.json`);
    }
  }
  return out;
}

export async function getTranslations(lang: Language = 'es') {
  let translations = await loadLocale(lang);
  return translations;
}

export async function t(key: string, lang: Language = 'es'): Promise<string> {
  const dict = await getTranslations(lang);
  return dict[key] || key;
}

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

export const languages: Language[] = ['es', 'en', 'ru', 'zh'];

export type { Language };
