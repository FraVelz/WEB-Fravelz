"use client";

import { GSAPGlowBlob } from "./GSAPGlowBlob";
import { cn } from "@/utils/cn";

const GLOW_EFFECTS = [
  {
    id: "primary",
    position: "top-1/3 left-1/4",
    size: "w-96 h-96",
    color: "bg-primary/25 dark:bg-primary/20",
    delay: 0,
  },
  {
    id: "accent",
    position: "bottom-1/3 right-1/4",
    size: "w-96 h-96",
    color: "bg-accent/25 dark:bg-accent/20",
    delay: 1,
  },
  {
    id: "info",
    position: "top-2/3 left-3/4",
    size: "w-72 h-72",
    color: "bg-info/15 dark:bg-info/10",
    delay: 0.5,
  },
] as const;

export function HomeAmbientGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden lg:px-20"
      role="presentation"
      aria-hidden="true"
    >
      <div className="to-bg/40 dark:to-bg/60 absolute inset-0 bg-linear-to-b from-transparent via-transparent" />
      {GLOW_EFFECTS.map((effect) => (
        <GSAPGlowBlob
          key={effect.id}
          className={cn("absolute rounded-full blur-3xl", effect.position, effect.size, effect.color)}
          delay={effect.delay}
        />
      ))}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgb(var(--color-primary) / 0.08), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgb(var(--color-accent) / 0.06), transparent 50%)",
        }}
      />
    </div>
  );
}
