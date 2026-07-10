import HomeMain from "@/features/PageFeature/HomeMain";
import { JsonLd } from "@/lib/json-ld";
import { homeJsonLd } from "@/lib/json-ld-data";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLangParams } from "@/lib/page-lang";
import { getTranslations } from "@/utils/i18n";
import { translationOr } from "@/types/translations";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await resolveLangParams(params);
  const t = getTranslations(lang);

  const title = translationOr(t, "home_title", `Fravelz | ${translationOr(t, "proyectos_personales", "Portfolio")}`);
  const description = translationOr(t, "home_description", translationOr(t, "projects_section_description", ""));

  return buildPageMetadata({ lang, title, description });
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLangParams(params);
  const t = getTranslations(lang);
  const title = translationOr(t, "home_title", `Fravelz | ${translationOr(t, "proyectos_personales", "Portfolio")}`);
  const description = translationOr(t, "home_description", translationOr(t, "projects_section_description", ""));

  return (
    <>
      <JsonLd data={homeJsonLd(lang, title, description)} />
      <HomeMain lang={lang} />
    </>
  );
}
