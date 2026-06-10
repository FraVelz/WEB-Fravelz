import { isValidLanguage, type Language } from "@/lib/i18n-routing";

/** Idioma activo según el primer segmento de idioma en la URL (p. ej. `/en/projects/`). */
export function getLangFromPath(): Language {
  if (typeof window === "undefined") return "es";
  const segments = window.location.pathname.split("/").filter(Boolean);
  const found = segments.find((s) => isValidLanguage(s));
  return found ?? "es";
}

/** Sustituye el segmento de idioma conservando el resto de la ruta (p. ej. `/es/projects/foo` → `/en/projects/foo`). */
export function switchLangInPath(pathname: string, newLang: Language): string {
  const segments = pathname.split("/").filter(Boolean);
  const langIndex = segments.findIndex((s) => isValidLanguage(s));

  if (langIndex === -1) {
    return `/${newLang}/`;
  }

  segments[langIndex] = newLang;

  if (segments.length === 1) {
    return `/${newLang}/`;
  }

  return `/${segments.join("/")}`;
}
