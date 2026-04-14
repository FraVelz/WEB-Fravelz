import ProjectCard from "@/components/ui/ProjectCard";
import ProjectsViewAllButton from "@/components/ui/ProjectsViewAllButton";
import { getAllProjects } from "@/utils/data/projects";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function ProjectsSection({ lang, classname = "" }: { lang: Language; classname?: string }) {
  const t = getTranslations(lang);
  const allProjects = getAllProjects();
  const projects = allProjects.slice(0, 3);

  return (
    <section id="projects" className={classname}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100" data-i18n="hacking_projects_title">
            {t.hacking_projects_title || "Proyectos Principales"}
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            data-i18n="projects_section_description"
          >
            {t.projects_section_description ||
              "Una selección de mis proyectos más destacados como desarrollador frontend."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} data-project-card>
              <ProjectCard project={project} lang={lang} />
            </div>
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="mt-12 text-center">
            <ProjectsViewAllButton lang={lang} />
          </div>
        )}
      </div>
    </section>
  );
}
