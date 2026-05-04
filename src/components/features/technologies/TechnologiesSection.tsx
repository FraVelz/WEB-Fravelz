import {
  getAccentVar,
  getBarVar,
  getCategoryClass,
  getLevelClass,
  getProgressPercent,
} from "@/components/features/technologies/functions";

import { technologies } from "@/components/features/technologies/data";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function TechnologiesSection({ lang, classname = "" }: { lang: Language; classname?: string }) {
  const t = getTranslations(lang);

  return (
    <section id="technologies" className={classname}>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="tech-title mb-4 text-4xl font-bold" data-i18n="tech_title">
            {t.tech_title || "Tecnologías"}
          </h2>
          <p className="tech-muted mt-4 max-w-3xl text-sm">
            <span className="tech-accent font-semibold" data-i18n="tech_note">
              {t.tech_note || "Nota:"}
            </span>{" "}
            <span data-i18n="tech_disclaimer">{t.tech_disclaimer || ""}</span>
          </p>
        </div>

        {technologies.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => {
              const pct = getProgressPercent(tech.level);
              return (
                <div
                  key={tech.id}
                  className="tech-card rounded-2xl border p-6 transition"
                  style={
                    {
                      "--accent": getAccentVar(tech.id),
                      "--bar": getBarVar(tech.level),
                    } as React.CSSProperties
                  }
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="tech-icon flex h-12 w-12 items-center justify-center rounded-xl">
                      <div
                        className="h-7 w-7 [&>svg]:h-full [&>svg]:max-h-full [&>svg]:w-full [&>svg]:max-w-full"
                        dangerouslySetInnerHTML={{ __html: tech.svg }}
                      />
                    </div>
                    <h4 className="tech-text text-lg font-semibold">{tech.name}</h4>
                  </div>
                  <p className="tech-muted mb-4 text-sm">
                    <span className="font-semibold" data-i18n="tech_info_level">
                      {t.tech_info_level || "Nivel"}:
                    </span>{" "}
                    <span className={getLevelClass(tech.level)} data-i18n={tech.levelKey}>
                      {t[tech.levelKey] || tech.level}
                    </span>
                    <span className="tech-dot">·</span>
                    <span className="font-semibold" data-i18n="tech_info_category">
                      {t.tech_info_category || "Categoría"}:
                    </span>{" "}
                    <span className={getCategoryClass(tech.category)} data-i18n={tech.categoryKey}>
                      {t[tech.categoryKey] || tech.category}
                    </span>
                  </p>
                  <div className="tech-meter h-2 rounded-full">
                    <div className="tech-meter-bar h-2 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
