import { getTranslations } from "@/utils/i18n";
import type { Project } from "@/utils/data/project-types";
import type { Language } from "@/lib/i18n-routing";

import ProjectCardView, { type ProjectCardLabels } from "./ProjectCardView";

export default function ProjectCard({ project, lang = "es" }: { project: Project; lang?: Language }) {
  const t = getTranslations(lang);
  const labels: ProjectCardLabels = {
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

  return <ProjectCardView project={project} lang={lang} labels={labels} />;
}
