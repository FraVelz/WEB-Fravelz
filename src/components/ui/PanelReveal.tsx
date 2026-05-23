import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

import styles from "./PanelReveal.module.css";

type PanelRevealProps = {
  children: ReactNode;
  className?: string;
};

/** Contenedor para animar paneles sin interferir con xPercent del scroll horizontal. */
export default function PanelReveal({ children, className }: PanelRevealProps) {
  return (
    <div data-home-panel-reveal className={cn(styles.revealPanel, "h-fit w-full", className)}>
      {children}
    </div>
  );
}
