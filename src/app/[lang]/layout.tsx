import { HtmlLang } from "@/components/HtmlLang";
import { type Language, languages } from "@/lib/i18n-routing";
import { notFound } from "next/navigation";

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
  const { lang } = await params;
  if (!languages.includes(lang as Language)) {
    notFound();
  }
  return (
    <>
      <HtmlLang lang={lang} />
      {children}
    </>
  );
}
