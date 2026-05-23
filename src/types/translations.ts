/** Diccionario plano de claves i18n → texto (fusionado desde `public/locals`). */
export type Translations = Readonly<Record<string, string>>;

export function translationOr(dict: Translations, key: string, fallback: string): string {
  const value = dict[key];
  return value !== undefined && value !== "" ? value : fallback;
}
