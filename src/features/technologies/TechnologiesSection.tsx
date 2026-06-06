import "./technologies.css";

import PanelReveal from "@/components/ui/PanelReveal";
import { getAccentVar, getCategoryClass } from "./utils/functions";
import { technologies } from "./utils/data";

import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function TechnologiesSection({ lang, classname = "" }: { lang: Language; classname?: string }) {
  const t = getTranslations(lang);

  return (
    <section id="technologies" className={classname}>
      <PanelReveal>
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="tech-title mb-4 text-4xl font-bold">{t.tech_title || "Tecnologías"}</h2>
          </div>

          {technologies.length > 0 && (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="tech-card rounded-2xl border p-6 transition"
                  style={{ "--accent": getAccentVar(tech.id) } as React.CSSProperties}
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
                  <p className="tech-muted text-sm">
                    <span className="font-semibold">{t.tech_info_category || "Categoría"}:</span>{" "}
                    <span className={getCategoryClass(tech.category)}>{t[tech.categoryKey] || tech.category}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </PanelReveal>
    </section>
  );
}
