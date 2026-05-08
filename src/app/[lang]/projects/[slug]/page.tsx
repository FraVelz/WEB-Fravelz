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
                className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
                data-i18n="project_status_development"
              >
                {t.project_status_development ?? "En desarrollo"}
              </span>
            ) : (
              <span
                className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200"
                data-i18n="project_status_finished"
              >
                {t.project_status_finished ?? "Finalizado"}
              </span>
            )}
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
              >
                {tech}
              </span>
            ))}
            {project.year && (
              <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
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
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
