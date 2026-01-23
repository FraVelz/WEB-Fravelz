import { getTranslations, type Language } from "@/utils/i18n";

const validLangs: Language[] = ["es", "en", "ru", "zh"];

export function resolveLang(pathname: string) {
    const urlLang = pathname.split("/").filter(Boolean)[0];

    const lang: Language = validLangs.includes(urlLang as Language)
        ? (urlLang as Language)
        : "es";

    return {
        lang,
        t: getTranslations(lang),
    };
}
