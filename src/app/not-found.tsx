import type { Metadata } from "next";

import { buildNotFoundMetadata } from "@/lib/not-found-metadata";
import { getRequestLang } from "@/lib/request-lang";
import { getTranslations } from "@/utils/i18n";

import { NotFoundContent } from "./_components/NotFoundContent";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLang();
  const t = getTranslations(lang);
  const title = t.error_404_title ?? "Página no encontrada";

  return buildNotFoundMetadata(`${title} | Fravelz`);
}

export default async function NotFound() {
  const lang = await getRequestLang();
  const t = getTranslations(lang);

  return (
    <NotFoundContent
      lang={lang}
      title={t.error_404_title ?? "Página no encontrada"}
      description={t.error_404_description ?? "Parece que te has perdido en el ciberespacio."}
      backHome={t.error_404_back_home ?? "Volver al inicio"}
    />
  );
}
