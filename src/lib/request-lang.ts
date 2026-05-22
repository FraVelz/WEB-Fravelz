import { headers } from "next/headers";

import { isValidLanguage, type Language } from "@/lib/i18n-routing";

/** Idioma de la petición actual (cabecera `x-lang` fijada en `src/proxy.ts`). */
export async function getRequestLang(defaultLang: Language = "es"): Promise<Language> {
  const headerLang = (await headers()).get("x-lang");
  return headerLang && isValidLanguage(headerLang) ? headerLang : defaultLang;
}
