import type { Project } from "@/utils/data/projects";

import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export function SectionsDetails({ lang, project }: { lang: Language; project: Project }) {
  const t = getTranslations(lang);

  return (
    <div className="max-w-none">
      {project.whatILearned?.[lang]?.length ? (
        <section className="mb-12" id="project-what-i-learned-section">
          <h2 className="mb-6 text-3xl font-bold text-[rgb(var(--color-text))]">
            {t.projects_what_i_learned || "Qué aprendí"}
          </h2>
          <ul className="space-y-3" id="project-what-i-learned-list">
            {project.whatILearned[lang]!.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[rgb(var(--color-text))]">
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-[rgb(var(--color-primary))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.extraInfo?.[lang]?.length ? (
        <section className="mb-12" id="project-extra-info-section">
          <h2 className="mb-6 text-3xl font-bold text-[rgb(var(--color-text))]">
            {t.projects_extra_info || "Información extra"}
          </h2>
          <ul
            className="list-disc space-y-3 pl-6 text-[rgb(var(--color-text))] marker:text-[rgb(var(--color-primary))]"
            id="project-extra-info-list"
          >
            {project.extraInfo[lang]!.map((item) => (
              <li key={item} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.technicalDetails?.[lang]?.length ? (
        <section className="mb-12" id="project-technical-details-section">
          <h2 className="mb-6 text-3xl font-bold text-[rgb(var(--color-text))]">
            {t.projects_technical_details || "Detalles Técnicos"}
          </h2>
          <div className="rounded-lg bg-[rgb(var(--color-card))] p-6">
            <ul className="space-y-2" id="project-technical-details-list">
              {project.technicalDetails[lang]!.map((detail) => (
                <li key={detail} className="flex items-start gap-2 text-[rgb(var(--color-text))]">
                  <span draggable={false} className="text-[rgb(var(--color-primary))] select-none">
                    •
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  );
}
