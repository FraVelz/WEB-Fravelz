export type Language = "es" | "en" | "ru" | "zh";

export const languages: Language[] = ["es", "en", "ru", "zh"];

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

function languageFromAcceptHeader(acceptLanguage: string | null): Language {
  const primary = acceptLanguage?.split(",")[0]?.split("-")[0];
  if (primary && isValidLanguage(primary)) {
    return primary;
  }
  return "es";
}

export function localePathFromAcceptHeader(acceptLanguage: string | null): string {
  return `/${languageFromAcceptHeader(acceptLanguage)}/`;
}
