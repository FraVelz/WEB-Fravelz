export type Lang = "es" | "en" | "ru" | "zh";
export const LANGUAGES: Lang[] = ["es", "en", "ru", "zh"];

export type SearchResult =
  | { type: "project"; slug: string; title: string; technologies: string[] }
  | { type: "technology"; id: string; name: string }
  | { type: "certificate"; id: string; title: string; issuer: string }
  | { type: "page"; url: string; label: string; snippet: string };
