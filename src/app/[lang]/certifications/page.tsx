import "@/features/projects/projects-nav.css";

import CertificatesWithViewer from "@/components/ui/CertificatesWithViewer/CertificatesWithViewer";
import Footer from "@/components/layout/Footer";

import { JsonLd } from "@/lib/json-ld";
import { certificationsJsonLd } from "@/lib/json-ld-data";
import { buildPageMetadata } from "@/lib/metadata";
import { certificates, groupCertificates } from "@/utils/data/certificates";
import { resolveLangParams } from "@/lib/page-lang";

import type { Metadata } from "next";
import Link from "next/link";

import { getTranslations } from "@/utils/i18n";
import { cn } from "@/utils/cn";

const certFormationStackPath =
  "M11.7 2.294a.75.75 0 0 1 .6 0l8.25 3.75a.75.75 0 0 1 0 1.372l-8.25 3.75a.75.75 0 0 1-.6 0l-" +
  "8.25-3.75a.75.75 0 0 1 0-1.372l8.25-3.75Z";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await resolveLangParams(params);
  const t = getTranslations(lang);
  const title = `${t.cert_section_title || "Certificaciones"} — Fravelz`;
  const description = t.cert_intro_paragraph1 || "Certificaciones y formación.";

  return buildPageMetadata({ lang, title, description, pathname: "certifications" });
}

export default async function CertificationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLangParams(params);
  const t = getTranslations(lang);
  const title = `${t.cert_section_title || "Certificaciones"} — Fravelz`;
  const description = t.cert_intro_paragraph1 || "Certificaciones y formación.";
  const { web: webCerts, hixec: hixecCerts, hack4u: hack4uCerts, other: otherCerts } = groupCertificates(certificates);

  return (
    <section className="flex min-h-screen flex-col">
      <JsonLd data={certificationsJsonLd(lang, title, description, t.nav_presentation || "Home")} />
      <div
        className={cn(
          "flex-1 bg-slate-100 px-4 pt-6 pb-14 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10",
          "dark:bg-linear-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950",
        )}
      >
        <div className="mx-auto max-w-5xl space-y-10">
          <header className="pb-6 sm:pb-8">
            <Link
              href={`/${lang}/#about-me`}
              className={cn(
                "project-page-back-link -ml-1 inline-flex cursor-pointer items-center gap-2 rounded-lg px-1 py-0.5",
                "text-cyan-600 transition-colors hover:text-cyan-700",
                "dark:text-cyan-400 dark:hover:text-cyan-300",
              )}
            >
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>{t.cert_back_to_about || "Volver a Sobre Mí"}</span>
            </Link>
          </header>

          <section className="space-y-4 text-center" aria-labelledby="cert-page-title">
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-cyan-300/70 bg-cyan-100/70 px-3 py-1",
                "text-xs font-medium text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-900/40 dark:text-cyan-200",
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d={certFormationStackPath} />
                <path d="M3.26 10.226 11 13.722v7.028a.75.75 0 0 1-1.053.69l-6.75-3a.75.75 0 0 1-.447-.69v-7.524Z" />
                <path d="M12.5 20.75v-7.028l7.74-3.496v7.524a.75.75 0 0 1-.447.69l-6.75 3a.75.75 0 0 1-1.043-.69Z" />
              </svg>
              <span>{t.cert_formacion_badge || "Formación y certificados"}</span>
            </div>

            <h1
              id="cert-page-title"
              className="text-center text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-50"
            >
              {t.cert_section_title || "Certificaciones en Progreso"}
            </h1>
            <p className="mx-auto max-w-3xl text-sm text-slate-700 dark:text-slate-300">{t.cert_intro_paragraph1}</p>
            <p className="mx-auto max-w-3xl text-sm text-slate-700 dark:text-slate-300">{t.cert_intro_paragraph2}</p>
          </section>

          <section className="space-y-4" aria-labelledby="cert-list-heading">
            <h2 id="cert-list-heading" className="sr-only">
              {t.cert_section_title || "Certificaciones"}
            </h2>
            <div className="flex items-center justify-between gap-4">
              <span
                className={cn(
                  "rounded-full border border-cyan-200/70 bg-cyan-100 px-2 py-1 text-xs text-cyan-800",
                  "dark:border-cyan-700/60 dark:bg-cyan-900/40 dark:text-cyan-200",
                )}
              >
                <span>{t.cert_web_focus || "Enfocado en frontend / web"}</span>
              </span>
            </div>

            {webCerts.length === 0 && hixecCerts.length === 0 && hack4uCerts.length === 0 && otherCerts.length === 0 ? (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span>{t.cert_web_empty || "Aún no he subido certificados web aquí."}</span>
              </p>
            ) : (
              <CertificatesWithViewer
                webCerts={webCerts}
                hixecCerts={hixecCerts}
                hack4uCerts={hack4uCerts}
                otherCerts={otherCerts}
                clickToViewText={t.cert_click_to_view || "Haz clic para ver →"}
                closeText={t.cert_viewer_close || "Cerrar"}
                downloadText={t.cert_viewer_download || "Descargar PDF"}
                webTitle={t.cert_web_title || "Certificados de Desarrollo Web"}
                hixecTitle={t.cert_hixec_title || "Certificados Hixec"}
                hack4uTitle={t.cert_hack4u_title || "Certificados Hack4u"}
                otherTitle={t.cert_other_courses_title || "Otros cursos"}
              />
            )}
          </section>
        </div>
      </div>

      <Footer lang={lang} />
    </section>
  );
}
