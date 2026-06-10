import "@/features/projects/projects.css";

import { cn } from "@/utils/cn";
import type { Project } from "@/utils/data/project-types";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";
import { PROJECT_PREVIEW_IMAGE } from "@/lib/og-image";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectCard({ project, lang = "es" }: { project: Project; lang?: Language }) {
  const t = getTranslations(lang);
  const currentLang = lang;
  const title = project.title[currentLang];
  const description = project.shortDescription[currentLang];
  const projectUrl = `/${currentLang}/projects/${project.slug}`;

  return (
    <article className="h-full" data-project-card-content>
      <div className="project-card-shell group h-full rounded-xl">
        <div className="project-card__wheel" aria-hidden />
        <Link
          href={projectUrl}
          className={cn(
            "project-card relative flex h-full flex-col rounded-[10px] bg-[rgb(var(--color-surface))] shadow-md",
            "transition-shadow duration-300 group-hover:shadow-xl group-focus-visible:shadow-xl",
          )}
        >
          <div
            className="relative w-full overflow-hidden rounded-t-[9px] bg-[rgb(var(--color-card))]"
            style={{ aspectRatio: PROJECT_PREVIEW_IMAGE.aspectRatio }}
          >
            <Image
              draggable={false}
              src={project.featuredImage}
              alt={`${title} - ${t.project_preview_alt || "Preview"}`}
              width={PROJECT_PREVIEW_IMAGE.width}
              height={PROJECT_PREVIEW_IMAGE.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-300 select-none group-hover:scale-105 group-focus-visible:scale-[1.02]"
              loading="lazy"
            />

            {project.isComingSoon && (
              <div className="absolute top-3 right-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-white">
                {t.projects_coming_soon || "Próximamente"}
              </div>
            )}
            {project.featured && (
              <div className="absolute top-3 left-3 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                {t.projects_featured || "Destacado"}
              </div>
            )}
            {project.inDevelopment ? (
              <div className="absolute bottom-3 left-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                {t.project_status_development ?? "En desarrollo"}
              </div>
            ) : (
              <div className="absolute bottom-3 left-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                {t.project_status_finished ?? "Finalizado"}
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col rounded-b-[9px] p-6">
            <h3
              className={cn(
                "project-card__title mb-2 text-xl font-bold text-[rgb(var(--color-text))] transition-colors",
                "group-hover:text-cyan-600 group-focus-visible:text-cyan-600",
                "dark:group-hover:text-cyan-400 dark:group-focus-visible:text-cyan-400",
              )}
              data-project-title
            >
              {title}
            </h3>
            <p className="mb-4 line-clamp-2 text-sm text-[rgb(var(--color-text-muted))]" data-project-description>
              {description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "rounded-md bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-700",
                    "dark:bg-cyan-900/30 dark:text-cyan-300",
                  )}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span
                  className={cn(
                    "rounded-md bg-[rgb(var(--color-card))] px-2 py-1 text-xs text-[rgb(var(--color-text-muted))]",
                  )}
                >
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
            <span
              className={cn(
                "project-card__cta mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors",
                "group-hover:underline group-focus-visible:underline",
                "dark:text-cyan-400",
              )}
            >
              {t.projects_view_project || "Ver Proyecto"}
              <svg
                className="h-4 w-4 transition-transform group-focus-visible:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
}
