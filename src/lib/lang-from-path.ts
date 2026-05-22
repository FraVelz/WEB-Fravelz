import { languages, type Language } from "@/lib/i18n-routing";

/** Idioma activo según el primer segmento de idioma en la URL (p. ej. `/en/projects/`). */
export function getLangFromPath(): Language {
  if (typeof window === "undefined") return "es";
  const segments = window.location.pathname.split("/").filter(Boolean);
  const found = segments.find((s) => languages.includes(s as Language));
  return (found as Language) ?? "es";
}
