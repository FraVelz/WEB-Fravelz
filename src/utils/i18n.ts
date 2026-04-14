import "server-only";

import { readFileSync } from "fs";
import { join } from "path";
import { cache } from "react";

import { type Language, isValidLanguage, languages, localePathFromAcceptHeader } from "@/lib/i18n-routing";

export type { Language };
export { isValidLanguage, languages, localePathFromAcceptHeader };

const LOCALE_FILES = [
  "common",
  "hero",
  "music",
  "certifications",
  "info",
  "technologies",
  "about",
  "hobbies",
  "footer",
] as const;

function loadLocale(lang: Language): Record<string, string> {
  const base = join(process.cwd(), "public", "locals", lang);
  const out: Record<string, string> = {};
  for (const name of LOCALE_FILES) {
    try {
      const data = JSON.parse(readFileSync(join(base, `${name}.json`), "utf-8")) as Record<string, string>;
      Object.assign(out, data);
    } catch {
      // skip
    }
  }
  return out;
}

const translations: Record<Language, Record<string, string>> = {
  es: loadLocale("es"),
  en: loadLocale("en"),
  ru: loadLocale("ru"),
  zh: loadLocale("zh"),
};

export const getTranslations = cache((lang: Language = "es") => {
  return translations[lang] || translations.es;
});

export function t(key: string, lang: Language = "es"): string {
  const dict = getTranslations(lang);
  return dict[key] || key;
}
