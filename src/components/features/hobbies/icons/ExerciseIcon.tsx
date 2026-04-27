import type { SVGProps } from "react";

import { cn } from "@/utils/cn";

export function ExerciseIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={cn("size-6 shrink-0 lg:size-full", className)} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 10v4M20 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6.5 9.5v5M17.5 9.5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6.5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d={"M3 9.5h2v5H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm18 0h-2v5h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
