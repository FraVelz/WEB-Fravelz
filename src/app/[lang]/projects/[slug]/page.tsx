import "@/features/projects/projects-nav.css";
import "./project-detail.css";

import { SectionsDetails } from "./_components/SectionsDetails";
import { ListImagesViewer } from "./_components/ListImageViewer";

import { resolveLangParam } from "@/lib/page-lang";
import { getAllProjects, getProjectBySlug } from "@/utils/data/projects";
import { getTranslations } from "@/utils/i18n";
import { languages } from "@/lib/i18n-routing";
import { JsonLd, projectDetailJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/metadata";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

  if (!project) notFound();

  const L = resolveLangParam(lang);
  const title = project.title[L];
  const description = project.fullDescription[L];
  const pageTitle = `${title} — Fravelz`;

  return buildPageMetadata({
    lang: L,
    title: pageTitle,
    description,
    pathname: `projects/${slug}`,
    type: "article",
    image: {
      url: project.featuredImage.src,
      width: project.featuredImage.width,
      height: project.featuredImage.height,
      alt: title,
    },
  });
}

export default async function ProjectSlugPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: langParam, slug } = await params;
  const lang = resolveLangParam(langParam);
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const t = getTranslations(lang);
  const title = project.title[lang];
  const description = project.fullDescription[lang];

  return (
    <>
      <JsonLd
        data={projectDetailJsonLd(lang, project, {
          home: t.nav_presentation || "Home",
          projects: t.nav_projects || "Projects",
        })}
      />
      <article className={cn("min-h-screen bg-[rgb(var(--color-bg))] px-4 pb-12 sm:px-6 lg:px-8")} data-project-page>
        <div className="mx-auto max-w-5xl pt-8">
          <Link
            href={`/${lang}/projects`}
            className={cn(
              "project-page-back-link mb-8 -ml-1 inline-flex cursor-pointer items-center gap-2 rounded-lg px-1 py-0.5",
              "text-cyan-600 transition-colors hover:text-cyan-700",
              "dark:text-cyan-400 dark:hover:text-cyan-300",
            )}
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
                >
                  {t.project_status_development ?? "En desarrollo"}
                </span>
              ) : (
                <span
                  className={cn(
                    "rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800",
                    "dark:bg-emerald-900/40 dark:text-emerald-200",
                  )}
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
                    "rounded-full bg-[rgb(var(--color-card))] px-3 py-1 text-sm text-[rgb(var(--color-text))]",
                  )}
                >
                  {project.year}
                </span>
              )}
            </div>

            <h1 className="mb-4 text-4xl font-bold text-[rgb(var(--color-text))] md:text-5xl" data-project-page-title>
              {title}
            </h1>
            <p className="mb-6 text-xl text-[rgb(var(--color-text-muted))]" data-project-page-description>
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.demoUrl && !project.isComingSoon && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "project-page-cta-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold",
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
                  <span>{t.projects_view_demo || "Ver Demo"}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "project-page-cta-secondary inline-flex items-center gap-2 rounded-lg",
                    "bg-[rgb(var(--color-text))] px-6 py-3 font-semibold text-[rgb(var(--color-text-inverse))]",
                    "transition-[border-color,box-shadow,opacity] hover:opacity-80",
                  )}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>{t.projects_view_code || "Ver Código"}</span>
                </a>
              )}
              {project.isComingSoon && (
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg bg-yellow-100 px-6 py-3 font-semibold text-yellow-800",
                    "dark:bg-yellow-900/30 dark:text-yellow-300",
                  )}
                >
                  {t.projects_coming_soon || "Próximamente"}
                </span>
              )}
            </div>
          </header>

          <ListImagesViewer
            key={project.slug}
            project={project}
            title={title}
            galleryHeading={(project.screenshots?.length ?? 0) > 0 ? t.projects_screenshots : undefined}
            carouselRegionAriaLabel={t.projects_carousel_aria}
            carouselPrevLabel={t.projects_carousel_prev}
            carouselNextLabel={t.projects_carousel_next}
          />

          <SectionsDetails lang={lang} project={project} />
        </div>
      </article>
    </>
  );
}
