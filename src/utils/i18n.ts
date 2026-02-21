// i18n system for Astro - loads from public/locales (single source of truth)

import { readFileSync } from 'fs';
import { join } from 'path';


type Language = 'es' | 'en' | 'ru' | 'zh';

const LOCALE_FILES = [
  'common',
  'hero',
  'music',
  'certifications',
  'info',
  'technologies',
  'projects',
  'about',
  'hobbies',
  'footer',
] as const;

function loadLocale(lang: Language): Record<string, string> {
  if (typeof process === 'undefined' || !process.cwd) {
    return {};
  }
  const base = join(process.cwd(), 'public', 'locales', lang);
  const out: Record<string, string> = {};
  for (const name of LOCALE_FILES) {
    try {
      const data = JSON.parse(
        readFileSync(join(base, `${name}.json`), 'utf-8')
      ) as Record<string, string>;
      Object.assign(out, data);
    } catch {
      // File not found or invalid, skip
    }
  }
  return out;
}

const translations: Record<Language, Record<string, string>> = {
  es: loadLocale('es'),
  en: loadLocale('en'),
  ru: loadLocale('ru'),
  zh: loadLocale('zh'),
};

export function getTranslations(lang: Language = 'es') {
  return translations[lang] || translations.es;
}

export function t(key: string, lang: Language = 'es'): string {
  const dict = getTranslations(lang);
  return dict[key] || key;
}

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

export const languages: Language[] = ['es', 'en', 'ru', 'zh'];

export type { Language };
