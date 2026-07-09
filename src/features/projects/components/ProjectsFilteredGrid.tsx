import ProjectCard from "@/components/ui/ProjectCard";
import {
  PROJECT_FILTER_TRANSITION,
  projectCardTransitionName,
} from "@/lib/project-view-transition";
import type { Project } from "@/utils/data/project-types";
import type { Language } from "@/lib/i18n-routing";
import type { ProjectFilter } from "@/utils/data/projects";
import { ViewTransition } from "react";

const filterEnter = { [PROJECT_FILTER_TRANSITION]: "project-in", default: "none" } as const;
const filterExit = { [PROJECT_FILTER_TRANSITION]: "project-out", default: "none" } as const;
const filterShare = { [PROJECT_FILTER_TRANSITION]: "project-move", default: "none" } as const;

const emptyEnter = { [PROJECT_FILTER_TRANSITION]: "filter-empty-in", default: "none" } as const;
const emptyExit = { [PROJECT_FILTER_TRANSITION]: "filter-empty-out", default: "none" } as const;

type ProjectsFilteredGridProps = {
  projects: Project[];
  lang: Language;
  activeFilter: ProjectFilter;
  emptyMessage: string;
};

export default function ProjectsFilteredGrid({
  projects,
  lang,
  activeFilter,
  emptyMessage,
}: ProjectsFilteredGridProps) {
  if (projects.length === 0) {
    return (
      <ViewTransition
        key={`empty-${activeFilter}`}
        enter={emptyEnter}
        exit={emptyExit}
        default="none"
      >
        <p className="text-center text-sm text-[rgb(var(--color-text-muted))]">{emptyMessage}</p>
      </ViewTransition>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
      {projects.map((project) => (
        <ViewTransition
          key={project.slug}
          name={projectCardTransitionName(project.slug)}
          enter={filterEnter}
          exit={filterExit}
          share={filterShare}
          default="none"
        >
          <div className="h-full">
            <ProjectCard project={project} lang={lang} />
          </div>
        </ViewTransition>
      ))}
    </div>
  );
}
