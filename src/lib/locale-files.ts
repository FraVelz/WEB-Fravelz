/** Archivos JSON bajo `public/locals/{lang}/` fusionados por `getTranslations`. */
export const LOCALE_FILES = [
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

export type LocaleFileName = (typeof LOCALE_FILES)[number];
