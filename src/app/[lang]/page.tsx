import HomeMain from "@/features/PageFeature/HomeMain";
import { getSiteUrl } from "@/lib/site-url";
import { resolveLangParams } from "@/lib/page-lang";
import { getTranslations } from "@/utils/i18n";
import { translationOr } from "@/types/translations";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await resolveLangParams(params);
  const t = getTranslations(lang);

  const title = translationOr(t, "home_title", `Fravelz | ${translationOr(t, "proyectos_personales", "Portfolio")}`);
  const description = translationOr(t, "home_description", translationOr(t, "projects_section_description", ""));
  const siteUrl = getSiteUrl();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${lang}/`,
      type: "website",
      images: [{ url: "/images/portfolio.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/portfolio.png"],
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLangParams(params);
  return <HomeMain lang={lang} />;
}
