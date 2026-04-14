import { cn } from "@/utils/cn";
import type { Project } from "@/utils/data/project-types";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectCard({ project, lang = "es" }: { project: Project; lang?: Language }) {
  const t = getTranslations(lang);
  const currentLang = lang;
  const title = project.title[currentLang];
  const description = project.shortDescription[currentLang];
  const projectUrl = `/${currentLang}/projects/${project.slug}`;

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-md",
        "transition-all duration-300 hover:border-cyan-500 hover:shadow-xl",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-400",
      )}
      data-project-card-content
      data-title-es={project.title.es}
      data-title-en={project.title.en}
      data-title-ru={project.title.ru}
      data-title-zh={project.title.zh}
      data-desc-es={project.shortDescription.es}
      data-desc-en={project.shortDescription.en}
      data-desc-ru={project.shortDescription.ru}
      data-desc-zh={project.shortDescription.zh}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={project.featuredImage}
          alt={`${title} - ${t.project_preview_alt || "Preview"}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {project.isComingSoon && (
          <div
            className="absolute top-3 right-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-white"
            data-i18n="projects_coming_soon"
          >
            {t.projects_coming_soon || "Próximamente"}
          </div>
        )}
        {project.featured && (
          <div
            className="absolute top-3 left-3 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white"
            data-i18n="projects_featured"
          >
            {t.projects_featured || "Destacado"}
          </div>
        )}
        {project.inDevelopment ? (
          <div
            className="absolute bottom-3 left-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white"
            data-i18n="project_status_development"
          >
            {t.project_status_development ?? "En desarrollo"}
          </div>
        ) : (
          <div
            className="absolute bottom-3 left-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white"
            data-i18n="project_status_finished"
          >
            {t.project_status_finished ?? "Finalizado"}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3
          className={cn(
            "mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-cyan-600",
            "dark:text-gray-100 dark:group-hover:text-cyan-400",
          )}
          data-project-title
        >
          {title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300" data-project-description>
          {description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <Link
          href={projectUrl}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors",
            "group-hover:underline hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
          )}
          data-i18n="projects_view_project"
        >
          {t.projects_view_project || "Ver Proyecto"}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
