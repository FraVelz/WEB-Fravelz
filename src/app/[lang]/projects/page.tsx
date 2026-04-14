import ProjectCard from "@/components/ui/ProjectCard";
import Footer from "@/components/ui/Footer";
import { getAllProjects } from "@/utils/data/projects";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getTranslations(lang as Language);
  return {
    title: `${t.hacking_projects_title || "Proyectos"} — Fravelz`,
    description: t.projects_all_projects_description || t.projects_section_description,
  };
}

export default async function ProjectsIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getTranslations(lang as Language);
  const projects = getAllProjects();

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Link
              href={`/${lang}#projects`}
              className={cn(
                "mb-6 inline-flex items-center gap-2 text-cyan-600 transition-colors hover:text-cyan-700",
                "dark:text-cyan-400 dark:hover:text-cyan-300",
              )}
              data-i18n="projects_back"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>{t.projects_back || "Volver"}</span>
            </Link>

            <h1
              className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-gray-100"
              data-i18n="hacking_projects_title"
            >
              {t.hacking_projects_title || "Proyectos Principales"}
            </h1>
            <p
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              data-i18n="projects_all_projects_description"
            >
              {t.projects_all_projects_description || "Todos mis proyectos como desarrollador frontend."}
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
              <span data-i18n="projects_total">{t.projects_total || "Total"}</span>:{" "}
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">{projects.length}</span>{" "}
              <span data-i18n="projects_projects">{t.projects_projects || "proyectos"}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} lang={lang as Language} />
            ))}
          </div>
        </div>
      </div>
      <Footer lang={lang as Language} />
    </>
  );
}
