import { notFound } from "next/navigation";

import { isValidLanguage, type Language } from "@/lib/i18n-routing";

export function resolveLangParam(lang: string): Language {
  if (!isValidLanguage(lang)) notFound();
  return lang;
}

export async function resolveLangParams(params: Promise<{ lang: string }>): Promise<Language> {
  const { lang } = await params;
  return resolveLangParam(lang);
}
