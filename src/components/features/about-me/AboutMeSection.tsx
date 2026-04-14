import AboutMeClient from "@/components/features/about-me/AboutMeClient";
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
      readMoreLabel={t.about_read_more || "Leer más"}
      closeModalAria={t.cert_viewer_close || "Cerrar"}
      navCertifications={t.nav_certifications || "Certificaciones"}
      infoAboutTitle={t.info_about_title || "Sobre Mí"}
    />
  );
}
