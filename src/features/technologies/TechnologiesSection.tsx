import "./technologies.css";

import PanelReveal from "@/components/ui/PanelReveal";
import { getAccentVar, getBadgeClass } from "./utils/functions";
import { technologies } from "./utils/data";

import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function TechnologiesSection({ lang, classname = "" }: { lang: Language; classname?: string }) {
  const t = getTranslations(lang);

  return (
    <section id="technologies" className={classname}>
      <PanelReveal>
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="tech-header">
            <h2 className="tech-title mb-3 text-4xl font-bold">{t.tech_title || "Tecnologías"}</h2>
            <p className="tech-muted max-w-2xl text-base leading-relaxed">
              {t.tech_subtitle ||
                "Herramientas y tecnologías que utilizo para construir experiencias web modernas y escalables."}
            </p>
            <span className="tech-watermark" aria-hidden>
              {"</>"}
            </span>
          </div>

          {technologies.length > 0 && (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech) => {
                const descKey = `tech_desc_${tech.id}`;
                const description = t[descKey] || tech.name;

                return (
                  <div
                    key={tech.id}
                    className="tech-card rounded-2xl border p-5 transition"
                    style={{ "--accent": getAccentVar(tech.id) } as React.CSSProperties}
                  >
                    <div className="flex items-start gap-4">
                      <div className="tech-icon flex h-12 w-12 items-center justify-center rounded-xl">
                        <div
                          className="h-7 w-7 [&>svg]:h-full [&>svg]:max-h-full [&>svg]:w-full [&>svg]:max-w-full"
                          dangerouslySetInnerHTML={{ __html: tech.svg }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="tech-text text-lg leading-tight font-semibold">{tech.name}</h3>
                        <p className="tech-muted mt-1 text-sm leading-snug">{description}</p>
                      </div>
                    </div>
                    <span className={getBadgeClass(tech.category)}>{t[tech.categoryKey] || tech.category}</span>
                  </div>
                );
              })}
            </div>
          )}

          <p className="tech-footer">
            <span className="tech-footer-mark" aria-hidden>
              {"</>"}
            </span>
            <span className="tech-footer-text">{t.tech_footer || "1% mejor que ayer..."}</span>
          </p>
        </div>
      </PanelReveal>
    </section>
  );
}
