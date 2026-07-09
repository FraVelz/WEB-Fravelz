import "@/features/projects/projects-nav.css";

import ProjectCard from "@/components/ui/ProjectCard";
import ProjectsFilterBar from "@/features/projects/components/ProjectsFilterBar";
import Footer from "@/components/layout/Footer";

import { JsonLd, projectsIndexJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLangParams } from "@/lib/page-lang";
import { filterProjects, getAllProjects, parseProjectFilter, type ProjectFilter } from "@/utils/data/projects";
import { getTranslations } from "@/utils/i18n";
import { cn } from "@/utils/cn";

import type { Metadata } from "next";
import Link from "next/link";

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
  const lang = await resolveLangParams(params);
  const { filter: filterParam } = await searchParams;
  const activeFilter = parseProjectFilter(filterParam);
  const t = getTranslations(lang);
  const allProjects = getAllProjects();
  const projects = filterProjects(allProjects, activeFilter);
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
              {t.projects_all_projects_description || "Todos mis proyectos como desarrollador frontend."}
            </p>
            <p className="mt-2 text-sm text-[rgb(var(--color-text-muted))]">
              <span>{t.projects_total || "Total"}</span>:{" "}
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">{projects.length}</span>{" "}
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

          {projects.length === 0 ? (
            <p className="text-center text-sm text-[rgb(var(--color-text-muted))]">
              {t.projects_no_projects || "No hay proyectos con este filtro."}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
              {projects.map((p) => (
                <div key={p.slug} className="h-full">
                  <ProjectCard project={p} lang={lang} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
