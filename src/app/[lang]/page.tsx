import HomeMain from "@/components/features/PageFeature/HomeMain";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getTranslations(lang as Language);
  const title = (t as Record<string, string>).home_title || `Fravelz | ${t.proyectos_personales || "Portfolio"}`;
  const description = (t as Record<string, string>).home_description || t.projects_section_description || "";
  const siteUrl = "https://fravelz.vercel.app";

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
  const { lang } = await params;
  return <HomeMain lang={lang as Language} />;
}
