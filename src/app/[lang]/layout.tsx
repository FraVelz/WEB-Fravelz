import { ConditionalSkipLink } from "@/components/layout/ConditionalSkipLink";
import { ConditionalHeader } from "@/components/layout/header";
import { resolveLangParams } from "@/lib/page-lang";
import { languages, type Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";
import { cn } from "@/utils/cn";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang: Language = await resolveLangParams(params);
  const t = getTranslations(lang);

  return (
    <>
      <ConditionalSkipLink label={t.nav_skip_to_content ?? "Saltar al contenido principal"} />

      <ConditionalHeader t={t} lang={lang} />

      <div id="main-content" className={cn("min-h-dvh", "scroll-mt-24")}>
        {children}
      </div>
    </>
  );
}
