import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

const footerNavLinkClass = cn(
  "text-sm text-zinc-600 transition-colors hover:text-cyan-600",
  "dark:text-zinc-400 dark:hover:text-cyan-400",
);
export default async function Footer({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <footer
      className={cn(
        "z-30 mt-auto border-t border-zinc-200/80 bg-zinc-50/70 text-zinc-600",
        "dark:border-zinc-700/80 dark:bg-zinc-900/50 dark:text-zinc-400",
      )}
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-0 py-12 sm:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h3
              className="mb-4 pl-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500"
              data-i18n="footer_links_title"
            >
              {t.footer_links_title}
            </h3>
            <nav className="flex flex-col gap-2 pl-4 sm:gap-3" aria-label="Site links">
              <a href={`/${lang}`} className={footerNavLinkClass}>
                <span data-i18n="footer_nav_home">{t.footer_nav_home}</span>
              </a>
              <a href={`/${lang}/certifications`} className={footerNavLinkClass}>
                <span data-i18n="nav_certifications">{t.nav_certifications}</span>
              </a>
              <a href={`/${lang}/projects`} className={footerNavLinkClass}>
                <span data-i18n="nav_projects">{t.nav_projects}</span>
              </a>
            </nav>
          </div>

          <div>
            <h3
              className="mb-4 pl-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500"
              data-i18n="footer_author"
            >
              {t.footer_author}
            </h3>
            <div className="flex flex-col gap-2 pl-4 text-sm">
              <p className="text-zinc-600 dark:text-zinc-400" data-i18n="footer_copyright">
                {t.footer_copyright}
              </p>
              <p data-i18n="footer_license">{t.footer_license}</p>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-200/60 px-2 pt-8",
            "text-xs text-zinc-500 sm:flex-row dark:border-zinc-700/60 dark:text-zinc-500",
          )}
        >
          <span data-i18n="footer_built_with">{t.footer_built_with}</span>
          <span className="font-medium text-zinc-600 dark:text-zinc-400">Fravelz</span>
        </div>
      </div>
    </footer>
  );
}
