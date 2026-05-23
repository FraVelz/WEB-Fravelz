import "server-only";

import { readFileSync } from "fs";
import { join } from "path";
import { cache } from "react";

import type { Language } from "@/lib/i18n-routing";
import { LOCALE_FILES } from "@/lib/locale-files";
import type { Translations } from "@/types/translations";

function loadLocale(lang: Language): Translations {
  const base = join(process.cwd(), "public", "locals", lang);
  const out: Record<string, string> = {};
  for (const name of LOCALE_FILES) {
    const filePath = join(base, `${name}.json`);
    try {
      const data = JSON.parse(readFileSync(filePath, "utf-8")) as Record<string, string>;
      Object.assign(out, data);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[i18n] Missing or invalid locale file: ${filePath}`, err);
      }
    }
  }
  return out;
}

const translations: Record<Language, Translations> = {
  es: loadLocale("es"),
  en: loadLocale("en"),
  ru: loadLocale("ru"),
  zh: loadLocale("zh"),
};

export const getTranslations = cache((lang: Language = "es"): Translations => {
  return translations[lang] ?? translations.es;
});
