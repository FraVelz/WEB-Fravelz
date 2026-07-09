"use client";

import {
  PROJECT_FILTER_TRANSITION,
  projectCardTransitionName,
} from "@/lib/project-view-transition";
import { filterProjects, parseProjectFilter } from "@/utils/data/projects";
import type { Project } from "@/utils/data/project-types";
import type { Language } from "@/lib/i18n-routing";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ViewTransition } from "react";

import ProjectCardView, { type ProjectCardLabels } from "./ProjectCardView";

const filterEnter = { [PROJECT_FILTER_TRANSITION]: "project-in", default: "none" } as const;
const filterExit = { [PROJECT_FILTER_TRANSITION]: "project-out", default: "none" } as const;
const filterMove = { [PROJECT_FILTER_TRANSITION]: "project-move", default: "none" } as const;

const emptyEnter = { [PROJECT_FILTER_TRANSITION]: "filter-empty-in", default: "none" } as const;
const emptyExit = { [PROJECT_FILTER_TRANSITION]: "filter-empty-out", default: "none" } as const;

type ProjectsFilteredGridProps = {
  allProjects: Project[];
  lang: Language;
  labels: ProjectCardLabels;
  emptyMessage: string;
};

export default function ProjectsFilteredGrid({
  allProjects,
  lang,
  labels,
  emptyMessage,
}: ProjectsFilteredGridProps) {
  const searchParams = useSearchParams();
  const activeFilter = parseProjectFilter(searchParams.get("filter") ?? undefined);
  const projects = useMemo(
    () => filterProjects(allProjects, activeFilter),
    [allProjects, activeFilter],
  );

  if (projects.length === 0) {
    return (
      <ViewTransition key={`empty-${activeFilter}`} enter={emptyEnter} exit={emptyExit} default="none">
        <p className="text-center text-sm text-[rgb(var(--color-text-muted))]">{emptyMessage}</p>
      </ViewTransition>
    );
  }

  return (
    <div className="projects-filter-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
      {projects.map((project) => (
        <ViewTransition
          key={project.slug}
          name={projectCardTransitionName(project.slug)}
          enter={filterEnter}
          exit={filterExit}
          update={filterMove}
          share={filterMove}
          default="none"
        >
          <ProjectCardView project={project} lang={lang} labels={labels} />
        </ViewTransition>
      ))}
    </div>
  );
}
