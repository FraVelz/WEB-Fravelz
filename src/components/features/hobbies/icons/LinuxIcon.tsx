import type { SVGProps } from "react";

import { cn } from "@/utils/cn";

export function LinuxIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={cn("size-6 shrink-0 lg:size-full", className)} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 21h8M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
