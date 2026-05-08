import { LANGUAGES, type Lang } from "./data";

export function getLangFromPath(): Lang {
  const segment = window.location.pathname.split("/").filter(Boolean)[0];
  return LANGUAGES.includes(segment as Lang) ? (segment as Lang) : "es";
}

export function getBaseUrl(): string {
  if (typeof window === "undefined") return "/";
  const w = window as Window & { __BASE_URL__?: string };
  return w.__BASE_URL__ || "/";
}

export function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Mapea prefijos de claves i18n a URL y etiqueta de sección */
export function getUrlForI18nKey(key: string, baseUrl: string, lang: Lang): { url: string; label: string } | null {
  const k = key.toLowerCase();
  if (k.startsWith("nav_presentation") || k.startsWith("hero_") || k === "ir_abajo" || k === "autor")
    return { url: `${baseUrl}${lang}/#presentation`, label: "Presentación" };
  if (
    k.startsWith("nav_about") ||
    k.startsWith("about_") ||
    k.startsWith("info_about") ||
    k.startsWith("info_currently")
  )
    return { url: `${baseUrl}${lang}/#about-me`, label: "Sobre Mí" };
  if (k.startsWith("nav_technologies") || k.startsWith("tech_"))
    return { url: `${baseUrl}${lang}/#technologies`, label: "Tecnologías" };
  if (
    k.startsWith("nav_projects") ||
    k.startsWith("projects_") ||
    k.startsWith("hacking_") ||
    (k.startsWith("project_") && !k.includes("preview"))
  )
    return { url: `${baseUrl}${lang}/#projects`, label: "Proyectos" };
  if (k.startsWith("nav_certifications") || k.startsWith("cert_") || k.startsWith("info_certifications"))
    return {
      url: `${baseUrl}${lang}/certifications`,
      label: "Certificaciones",
    };
  if (k.startsWith("contact_")) return { url: `${baseUrl}${lang}/#contacto`, label: "Contacto" };
  if (k.startsWith("hobbies_") || k.startsWith("info_hobbies"))
    return { url: `${baseUrl}${lang}/#hobbies`, label: "Pasatiempos" };
  if (k.startsWith("footer_") || k.startsWith("error_") || k.startsWith("dev_"))
    return { url: `${baseUrl}${lang}/`, label: "Inicio" };
  if (k.startsWith("music_") || k.startsWith("cancion_"))
    return { url: `${baseUrl}${lang}/#presentation`, label: "Música" };
  return { url: `${baseUrl}${lang}/`, label: "Página" };
}
