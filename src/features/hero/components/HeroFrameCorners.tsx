import { cn } from "@/utils/cn";

const cornerClass = cn(
  "pointer-events-none absolute z-20 hidden size-14 lg:block",
  "border-cyan-500/70 dark:border-cyan-400/55",
);

export default function HeroFrameCorners() {
  return (
    <>
      <div
        aria-hidden
        data-hero-enter="frame"
        className={cn(cornerClass, "top-0 left-0 rounded-tl-xl border-t-2 border-l-2 lg:-top-8 lg:-left-8")}
      />
      <div
        aria-hidden
        data-hero-enter="frame"
        className={cn(cornerClass, "right-0 bottom-0 rounded-br-xl border-b-2 border-r-2 lg:-bottom-8 lg:-right-8")}
      />
    </>
  );
}
