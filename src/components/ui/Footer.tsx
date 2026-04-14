import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function Footer({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <footer
      className={cn(
        "z-30 mt-auto border-t border-slate-200/80 bg-slate-50/70 text-slate-600",
        "dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-slate-400",
      )}
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-0 py-12 sm:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h3
              className="mb-4 pl-4 text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500"
              data-i18n="footer_links_title"
            >
              {t.footer_links_title}
            </h3>
            <nav className="flex flex-col gap-2 pl-4 sm:gap-3" aria-label="Site links">
              <a
                href={`/${lang}`}
                className="text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <span data-i18n="footer_nav_home">{t.footer_nav_home}</span>
              </a>
              <a
                href={`/${lang}/certifications`}
                className="text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <span data-i18n="nav_certifications">{t.nav_certifications}</span>
              </a>
              <a
                href={`/${lang}/projects`}
                className="text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <span data-i18n="nav_projects">{t.nav_projects}</span>
              </a>
            </nav>
          </div>

          <div>
            <h3
              className="mb-4 pl-4 text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500"
              data-i18n="footer_author"
            >
              {t.footer_author}
            </h3>
            <div className="flex flex-col gap-2 pl-4 text-sm">
              <p className="text-slate-600 dark:text-slate-400" data-i18n="footer_copyright">
                {t.footer_copyright}
              </p>
              <p data-i18n="footer_license">{t.footer_license}</p>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200/60 px-2 pt-8",
            "text-xs text-slate-500 sm:flex-row dark:border-slate-700/60 dark:text-slate-500",
          )}
        >
          <span data-i18n="footer_built_with">{t.footer_built_with}</span>
          <span className="font-medium text-slate-600 dark:text-slate-400">Fravelz</span>
        </div>
      </div>
    </footer>
  );
}
