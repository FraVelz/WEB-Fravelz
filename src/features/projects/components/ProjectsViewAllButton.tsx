import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";
import Link from "next/link";

export default async function ProjectsViewAllButton({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <Link
      style={{ "--clr": "rgb(var(--color-btn-base))" } as React.CSSProperties}
      className={cn(
        "btn-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500",
        "px-6 py-3 font-semibold text-white shadow-lg transition-all",
        "hover:from-cyan-600 hover:to-blue-600 hover:shadow-xl",
      )}
      href={`/${lang}/projects`}
    >
      <span className="button__icon-wrapper">
        <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
          <path
            fill="currentColor"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          />
        </svg>
        <svg
          className="button__icon-svg button__icon-svg--copy"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            fill="currentColor"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          />
        </svg>
      </span>
      <span data-i18n="projects_view_all">{t.projects_view_all || "Ver Todos los Proyectos"}</span>
    </Link>
  );
}
