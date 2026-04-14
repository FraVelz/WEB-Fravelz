import CertificatesWithViewer from "@/components/ui-react/CertificatesWithViewer/CertificatesWithViewer";
import Footer from "@/components/ui/Footer";
import { certificates, groupCertificates } from "@/utils/data/certificates";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getTranslations(lang as Language);
  return {
    title: `${t.cert_section_title || "Certificaciones"} — Fravelz`,
    description: t.cert_intro_paragraph1 || "Certificaciones y formación.",
  };
}

export default async function CertificationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getTranslations(lang as Language);
  const { web: webCerts, hixec: hixecCerts, hack4u: hack4uCerts, other: otherCerts } = groupCertificates(certificates);

  return (
    <section className="flex min-h-screen flex-col pt-8">
      <div className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href={`/${lang}/#about-me`}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium text-cyan-700 underline underline-offset-4",
            "transition-colors hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="16"
            height="16"
            className="inline-block shrink-0"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span data-i18n="cert_back_to_about">{t.cert_back_to_about || "Volver a Sobre Mí"}</span>
        </Link>
      </div>

      <div
        className={cn(
          "min-h-screen bg-linear-to-b from-slate-100 via-blue-50 to-cyan-50 px-4 py-14 sm:px-6 lg:px-8",
          "dark:bg-linear-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950",
        )}
      >
        <div className="mx-auto max-w-5xl space-y-10">
          <section className="space-y-4 text-center">
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-cyan-300/70 bg-cyan-100/70 px-3 py-1",
                "text-xs font-medium text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-900/40 dark:text-cyan-200",
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M11.7 2.294a.75.75 0 0 1 .6 0l8.25 3.75a.75.75 0 0 1 0 1.372l-8.25 3.75a.75.75 0 0 1-.6 0l-8.25-3.75a.75.75 0 0 1 0-1.372l8.25-3.75Z" />
                <path d="M3.26 10.226 11 13.722v7.028a.75.75 0 0 1-1.053.69l-6.75-3a.75.75 0 0 1-.447-.69v-7.524Z" />
                <path d="M12.5 20.75v-7.028l7.74-3.496v7.524a.75.75 0 0 1-.447.69l-6.75 3a.75.75 0 0 1-1.043-.69Z" />
              </svg>
              <span data-i18n="cert_formacion_badge">{t.cert_formacion_badge || "Formación y certificados"}</span>
            </div>

            <h1 className="text-center text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-50">
              {t.cert_section_title || "Certificaciones en Progreso"}
            </h1>
            <p className="mx-auto max-w-3xl text-sm text-slate-700 dark:text-slate-300">{t.cert_intro_paragraph1}</p>
            <p className="mx-auto max-w-3xl text-sm text-slate-700 dark:text-slate-300">{t.cert_intro_paragraph2}</p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span
                className={cn(
                  "rounded-full border border-cyan-200/70 bg-cyan-100 px-2 py-1 text-xs text-cyan-800",
                  "dark:border-cyan-700/60 dark:bg-cyan-900/40 dark:text-cyan-200",
                )}
              >
                <span data-i18n="cert_web_focus">{t.cert_web_focus || "Enfocado en frontend / web"}</span>
              </span>
            </div>

            {webCerts.length === 0 && hixecCerts.length === 0 && hack4uCerts.length === 0 && otherCerts.length === 0 ? (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span data-i18n="cert_web_empty">{t.cert_web_empty || "Aún no he subido certificados web aquí."}</span>
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

      <Footer lang={lang as Language} />
    </section>
  );
}
