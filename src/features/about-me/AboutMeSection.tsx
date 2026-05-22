import AboutMeClient from "@/features/about-me/AboutMeClient";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function AboutMeSection({ lang, classname = "" }: { lang: Language; classname?: string }) {
  const t = getTranslations(lang);

  const historyEntries = [
    { i18nKey: "about_history_text", year: "2017", text: t.about_history_text },
    {
      i18nKey: "about_modal_paragraph1",
      year: "2018-2021",
      text: t.about_modal_paragraph1,
    },
    {
      i18nKey: "about_modal_paragraph2",
      year: "2021",
      text: t.about_modal_paragraph2,
    },
    {
      i18nKey: "about_modal_paragraph3",
      year: "2021-2024",
      text: t.about_modal_paragraph3,
    },
    {
      i18nKey: "about_modal_paragraph4",
      year: "2025",
      text: t.about_modal_paragraph4,
    },
    {
      i18nKey: "about_modal_paragraph5",
      year: "+2026",
      text: t.about_modal_paragraph5,
    },
  ];

  return (
    <AboutMeClient
      lang={lang}
      classname={classname}
      historyEntries={historyEntries}
      navCertifications={t.nav_certifications || "Certificaciones"}
      infoAboutTitle={t.info_about_title || "Sobre Mí"}
      sliderLabels={{
        stageLabel: t.info_about_subtitle || "Mi Historia",
        regionAria: t.about_history_region_aria || "Historia personal",
        tabsAria: t.about_history_tabs_aria || "Etapas de la historia",
        prev: t.about_history_prev || "Etapa anterior",
        next: t.about_history_next || "Etapa siguiente",
        goToYear: t.about_history_go_to_year || "Ir a {year}",
      }}
    />
  );
}
