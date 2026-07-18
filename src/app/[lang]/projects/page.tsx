import "@/features/projects/projects-nav.css";
import "@/features/projects/project-view-transition.css";

import ProjectsFilteredGrid from "@/features/projects/components/ProjectsFilteredGrid";
import ProjectsFilterBar from "@/features/projects/components/ProjectsFilterBar";
import ProjectsFilterCount from "@/features/projects/components/ProjectsFilterCount";
import Footer from "@/components/layout/Footer";

import { JsonLd } from "@/lib/json-ld";
import { projectsIndexJsonLd } from "@/lib/json-ld-data";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLangParams } from "@/lib/page-lang";
import { getAllProjects, parseProjectFilter, type ProjectFilter } from "@/utils/data/projects";
import { getTranslations } from "@/utils/i18n";
import { cn } from "@/utils/cn";

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await resolveLangParams(params);
  const t = getTranslations(lang);
  const title = `${t.hacking_projects_title || "Proyectos"} — Fravelz`;
  const description = t.projects_all_projects_description || t.projects_section_description || "";

  return buildPageMetadata({ lang, title, description, pathname: "projects" });
}

export default async function ProjectsIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ filter?: string }>;
}) {
  const [lang, { filter: filterParam }] = await Promise.all([resolveLangParams(params), searchParams]);
  const activeFilter = parseProjectFilter(filterParam);
  const t = getTranslations(lang);
  const allProjects = getAllProjects();
  const title = `${t.hacking_projects_title || "Proyectos"} — Fravelz`;
  const description = t.projects_all_projects_description || t.projects_section_description || "";

  const filterOptions: { id: ProjectFilter; label: string }[] = [
    { id: "all", label: t.projects_all || "Todos" },
    { id: "featured", label: t.projects_featured || "Destacado" },
    { id: "frontend", label: t.projects_filter_frontend || "Frontend" },
    { id: "fullstack", label: t.projects_filter_fullstack || "Fullstack" },
    { id: "development", label: t.project_status_development || "En desarrollo" },
    { id: "finished", label: t.project_status_finished || "Finalizado" },
  ];

  const cardLabels = {
    project_preview_alt: t.project_preview_alt,
    projects_coming_soon: t.projects_coming_soon,
    projects_featured: t.projects_featured,
    project_status_development: t.project_status_development,
    project_status_finished: t.project_status_finished,
    project_honesty_demo: t.project_honesty_demo,
    project_honesty_piloto: t.project_honesty_piloto,
    project_honesty_lab: t.project_honesty_lab,
    project_honesty_privado: t.project_honesty_privado,
    project_honesty_terminado: t.project_honesty_terminado,
    projects_view_project: t.projects_view_project,
  };

  return (
    <>
      <JsonLd data={projectsIndexJsonLd(lang, title, description, allProjects, t.nav_presentation || "Home")} />
      <div className={cn("min-h-screen bg-[rgb(var(--color-bg))] px-4 pb-12 sm:px-6 lg:px-8")}>
        <div className="mx-auto max-w-7xl pt-8">
          <div className="mb-12 text-center">
            <Link
              href={`/${lang}/#projects`}
              className={cn(
                "focus-ring mb-6 inline-flex items-center gap-2 rounded-md px-1 py-0.5 text-cyan-600 transition-colors",
                "hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
              )}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>{t.projects_back || "Volver"}</span>
            </Link>

            <h1 className="mb-4 text-4xl font-bold text-[rgb(var(--color-text))] md:text-5xl">
              {t.hacking_projects_title || "Proyectos Principales"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[rgb(var(--color-text-muted))]">
              {t.projects_all_projects_description || "Todos mis proyectos como desarrollador fullstack."}
            </p>
            <p className="mt-2 text-sm text-[rgb(var(--color-text-muted))]">
              <span>{t.projects_total || "Total"}</span>:{" "}
              <Suspense fallback={<span className="font-semibold text-cyan-600 dark:text-cyan-400">…</span>}>
                <ProjectsFilterCount allProjects={allProjects} />
              </Suspense>{" "}
              <span>{t.projects_projects || "proyectos"}</span>
            </p>
          </div>

          <div className="mb-10">
            <ProjectsFilterBar
              lang={lang}
              activeFilter={activeFilter}
              options={filterOptions}
              ariaLabel={t.projects_filter_aria || "Filtrar proyectos"}
            />
          </div>

          <Suspense fallback={null}>
            <ProjectsFilteredGrid
              allProjects={allProjects}
              lang={lang}
              labels={cardLabels}
              emptyMessage={t.projects_no_projects || "No hay proyectos con este filtro."}
            />
          </Suspense>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
