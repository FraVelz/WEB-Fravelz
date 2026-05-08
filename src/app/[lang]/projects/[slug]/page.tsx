import { SectionsDetails } from "./_components/SectionsDetails";

import { getAllProjects, getProjectBySlug } from "@/utils/data/projects";
import { getTranslations } from "@/utils/i18n";

import type { Language } from "@/lib/i18n-routing";
import { languages } from "@/lib/i18n-routing";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/cn";
import { GITHUB_MARK_PATH } from "@/utils/icons/github-mark";

export async function generateStaticParams() {
  const projects = getAllProjects();

  return languages.flatMap((lang) =>
    projects.map((project) => ({
      lang,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Proyecto" };

  const L = lang as Language;
  const title = project.title[L];
  const description = project.fullDescription[L];

  return {
    title: `${title} — Fravelz`,
    description,
    openGraph: { title, description },
  };
}

export default async function ProjectSlugPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const L = lang as Language;
  const t = getTranslations(L);
  const title = project.title[L];
  const description = project.fullDescription[L];

  return (
    <article className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-900" data-project-page>
      <div className="mx-auto max-w-5xl">
        <Link
          href={`/${lang}/projects`}
          className={cn(
            "mb-8 inline-flex cursor-pointer items-center gap-2 text-cyan-600 transition-colors hover:text-cyan-700",
            "dark:text-cyan-400 dark:hover:text-cyan-300",
          )}
          data-i18n="projects_back"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>{t.projects_back || "Volver a Proyectos"}</span>
        </Link>
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {project.inDevelopment ? (
              <span
                className={cn(
                  "rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800",
                  "dark:bg-amber-900/40 dark:text-amber-200",
                )}
                data-i18n="project_status_development"
              >
                {t.project_status_development ?? "En desarrollo"}
              </span>
            ) : (
              <span
                className={cn(
                  "rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800",
                  "dark:bg-emerald-900/40 dark:text-emerald-200",
                )}
                data-i18n="project_status_finished"
              >
                {t.project_status_finished ?? "Finalizado"}
              </span>
            )}
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700",
                  "dark:bg-cyan-900/30 dark:text-cyan-300",
                )}
              >
                {tech}
              </span>
            ))}
            {project.year && (
              <span
                className={cn(
                  "rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700",
                  "dark:bg-gray-700 dark:text-gray-300",
                )}
              >
                {project.year}
              </span>
            )}
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-gray-100" data-project-page-title>
            {title}
          </h1>
          <p className="mb-6 text-xl text-gray-600 dark:text-gray-400" data-project-page-description>
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && !project.isComingSoon && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold",
                  "bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-info))]",
                  "text-[rgb(var(--color-text-inverse))]",
                  "shadow-[0_4px_18px_rgb(var(--color-primary)/0.38)]",
                  "transition-all hover:from-[rgb(var(--color-primary-hover))] hover:to-[rgb(var(--color-info)/0.92)]",
                )}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span data-i18n="projects_view_demo">{t.projects_view_demo || "Ver Demo"}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg border border-[rgb(var(--color-drawer-border))]",
                  "bg-[rgb(var(--color-text))] px-6 py-3 font-semibold text-[rgb(var(--color-text-inverse))]",
                )}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={GITHUB_MARK_PATH} />
                </svg>
                <span data-i18n="projects_view_code">{t.projects_view_code || "Ver Código"}</span>
              </a>
            )}
            {project.isComingSoon && (
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg bg-yellow-100 px-6 py-3 font-semibold text-yellow-800",
                  "dark:bg-yellow-900/30 dark:text-yellow-300",
                )}
                data-i18n="projects_coming_soon"
              >
                {t.projects_coming_soon || "Próximamente"}
              </span>
            )}
          </div>
        </header>
        <div className="mb-12 overflow-hidden rounded-xl shadow-2xl">
          <Image
            src={project.featuredImage}
            alt={`${title} - Vista previa`}
            className="h-auto w-full object-cover select-none"
            draggable={false}
          />
        </div>

        <SectionsDetails L={L} project={project} title={title} />
      </div>
    </article>
  );
}
