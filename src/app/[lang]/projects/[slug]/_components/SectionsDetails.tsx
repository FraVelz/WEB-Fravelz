import type { Project } from "@/utils/data/projects";

import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export function SectionsDetails({ L, project }: { L: Language; project: Project }) {
  const t = getTranslations(L);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {project.whatILearned?.[L]?.length ? (
        <section className="mb-12" id="project-what-i-learned-section">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100" data-i18n="projects_what_i_learned">
            {t.projects_what_i_learned || "Qué aprendí"}
          </h2>
          <ul className="space-y-3" id="project-what-i-learned-list">
            {project.whatILearned[L]!.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-cyan-500"
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

      {project.extraInfo?.[L]?.length ? (
        <section className="mb-12" id="project-extra-info-section">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100" data-i18n="projects_extra_info">
            {t.projects_extra_info || "Información extra"}
          </h2>
          <ul
            className="list-disc space-y-3 pl-6 text-gray-700 marker:text-cyan-500 dark:text-gray-300 dark:marker:text-cyan-400"
            id="project-extra-info-list"
          >
            {project.extraInfo[L]!.map((item, i) => (
              <li key={`${i}-${item}`} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.technicalDetails?.[L]?.length ? (
        <section className="mb-12" id="project-technical-details-section">
          <h2
            className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100"
            data-i18n="projects_technical_details"
          >
            {t.projects_technical_details || "Detalles Técnicos"}
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <ul className="space-y-2" id="project-technical-details-list">
              {project.technicalDetails[L]!.map((detail) => (
                <li key={detail} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span draggable={false} className="text-cyan-500 select-none">
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
