"use client";

import type { ProjectFilter } from "@/utils/data/projects";
import type { Language } from "@/lib/i18n-routing";
import { PROJECT_FILTER_TRANSITION } from "@/lib/project-view-transition";
import { cn } from "@/utils/cn";
import Link from "next/link";

type FilterOption = {
  id: ProjectFilter;
  label: string;
};

type ProjectsFilterBarProps = {
  lang: Language;
  activeFilter: ProjectFilter;
  options: FilterOption[];
  ariaLabel: string;
};

export default function ProjectsFilterBar({ lang, activeFilter, options, ariaLabel }: ProjectsFilterBarProps) {
  return (
    <nav className="projects-filter-bar" aria-label={ariaLabel}>
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {options.map((option) => {
          const isActive = option.id === activeFilter;
          const href = option.id === "all" ? `/${lang}/projects` : `/${lang}/projects?filter=${option.id}`;

          return (
            <li key={option.id}>
              <Link
                href={href}
                scroll={false}
                transitionTypes={[PROJECT_FILTER_TRANSITION]}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "projects-filter-chip focus-ring inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-cyan-500 bg-cyan-500 text-white dark:border-cyan-400 dark:bg-cyan-500"
                    : cn(
                        "border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-muted))]",
                        "hover:border-cyan-400 hover:text-cyan-600 dark:hover:border-cyan-500 dark:hover:text-cyan-300",
                      ),
                )}
              >
                {option.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
