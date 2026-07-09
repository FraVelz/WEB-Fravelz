"use client";

import { PROJECT_FILTER_TRANSITION } from "@/lib/project-view-transition";
import { filterProjects, parseProjectFilter } from "@/utils/data/projects";
import type { Project } from "@/utils/data/project-types";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ViewTransition } from "react";

type ProjectsFilterCountProps = {
  allProjects: Project[];
};

export default function ProjectsFilterCount({ allProjects }: ProjectsFilterCountProps) {
  const searchParams = useSearchParams();
  const activeFilter = parseProjectFilter(searchParams.get("filter") ?? undefined);
  const count = useMemo(
    () => filterProjects(allProjects, activeFilter).length,
    [allProjects, activeFilter],
  );

  return (
    <ViewTransition
      key={`${activeFilter}-${count}`}
      name="projects-count"
      enter={{ [PROJECT_FILTER_TRANSITION]: "filter-count-in", default: "none" }}
      exit={{ [PROJECT_FILTER_TRANSITION]: "filter-count-out", default: "none" }}
      update={{ [PROJECT_FILTER_TRANSITION]: "filter-count-in", default: "none" }}
      default="none"
    >
      <span className="font-semibold text-cyan-600 dark:text-cyan-400">{count}</span>
    </ViewTransition>
  );
}
