import type { Metadata } from "next";

import { languages, type Language } from "@/lib/i18n-routing";
import { PROJECT_PREVIEW_IMAGE } from "@/lib/og-image";
import { getSiteUrl } from "@/lib/site-url";

export const SITE_NAME = "Fravelz";

const OG_LOCALE: Record<Language, string> = {
  es: "es_ES",
  en: "en_US",
  ru: "ru_RU",
  zh: "zh_CN",
};

export const DEFAULT_OG_IMAGE = "/images/portfolio.png";

/** URL absoluta alineada con `sitemap.ts` (home con `/` final). */
export function pageUrl(lang: Language, pathname = ""): string {
  const site = getSiteUrl();
  if (!pathname) return `${site}/${lang}/`;
  return `${site}/${lang}/${pathname.replace(/^\//, "")}`;
}

export function buildAlternates(lang: Language, pathname = ""): Metadata["alternates"] {
  const languageAlternates: Record<string, string> = {};

  for (const l of languages) {
    languageAlternates[l] = pageUrl(l, pathname);
  }
  languageAlternates["x-default"] = pageUrl("es", pathname);

  return {
    canonical: pageUrl(lang, pathname),
    languages: languageAlternates,
  };
}

export type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export function buildOpenGraph(options: {
  lang: Language;
  title: string;
  description: string;
  pathname?: string;
  type?: "website" | "article";
  image?: OgImage;
}): NonNullable<Metadata["openGraph"]> {
  const { lang, title, description, pathname = "", type = "website", image } = options;
  const ogImage: OgImage = image ?? {
    url: DEFAULT_OG_IMAGE,
    width: PROJECT_PREVIEW_IMAGE.width,
    height: PROJECT_PREVIEW_IMAGE.height,
    alt: title,
  };

  return {
    title,
    description,
    url: pageUrl(lang, pathname),
    type,
    siteName: SITE_NAME,
    locale: OG_LOCALE[lang],
    alternateLocale: languages.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
    images: [ogImage],
  };
}

export function buildTwitter(options: {
  title: string;
  description: string;
  image?: string;
}): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title: options.title,
    description: options.description,
    images: [options.image ?? DEFAULT_OG_IMAGE],
  };
}

export function buildPageMetadata(options: {
  lang: Language;
  title: string;
  description: string;
  pathname?: string;
  type?: "website" | "article";
  image?: OgImage;
}): Pick<Metadata, "title" | "description" | "alternates" | "openGraph" | "twitter"> {
  const ogImagePath = options.image?.url ?? DEFAULT_OG_IMAGE;

  return {
    title: options.title,
    description: options.description,
    alternates: buildAlternates(options.lang, options.pathname),
    openGraph: buildOpenGraph(options),
    twitter: buildTwitter({
      title: options.title,
      description: options.description,
      image: ogImagePath,
    }),
  };
}
