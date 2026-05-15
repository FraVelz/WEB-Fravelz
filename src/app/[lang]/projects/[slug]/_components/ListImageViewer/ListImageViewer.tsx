"use client";

import { cn } from "@/utils/cn";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  buildSlides,
  ProjectSlideImage,
  ChevronLeftIcon,
  ChevronRightIcon,
  ListImagesViewerProps,
} from "./ListImageViewer.lib";

export function ListImagesViewer({
  project,
  title,
  galleryHeading,
  carouselRegionAriaLabel,
  carouselPrevLabel,
  carouselNextLabel,
}: ListImagesViewerProps) {
  const slides = useMemo(() => buildSlides(project, title), [project, title]);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const displayIndex = count > 0 ? ((index % count) + count) % count : 0;
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback(
    (delta: number) => {
      if (count <= 1) return;
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (count <= 1) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, go]);

  function onCarouselTouchEnd(e: React.TouchEvent) {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || count <= 1) return;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy)) {
      go(dx > 0 ? -1 : 1);
    }
  }

  if (slides.length === 0) return null;

  const navBtnClass = cn(
    "cursor-pointer z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
    "border border-zinc-200/90 bg-white/95 text-zinc-800 shadow-lg backdrop-blur-sm",
    "transition-colors hover:border-cyan-500/60 hover:text-cyan-700",
    "dark:border-zinc-600 dark:bg-zinc-900/95 dark:text-zinc-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
    "disabled:pointer-events-none disabled:opacity-40",
  );

  const showHeading = Boolean(galleryHeading && count > 1);

  return (
    <section className="mb-12" aria-label={carouselRegionAriaLabel}>
      {showHeading ? (
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{galleryHeading}</h2>
      ) : null}

      <div
        className="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-zinc-200/80 dark:ring-zinc-700/80"
        onTouchStart={(ev) => {
          if (!ev.touches[0]) return;
          touchStartRef.current = { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
        }}
        onTouchEnd={onCarouselTouchEnd}
      >
        <div className="relative aspect-[16/10] max-h-[min(70vh,640px)] w-full bg-zinc-100 sm:aspect-[16/9] md:aspect-[21/11] md:max-h-none dark:bg-zinc-950">
          <div
            className={cn(
              "flex h-full transition-transform duration-300 ease-out will-change-transform",
              "motion-reduce:transform-none motion-reduce:transition-none",
            )}
            style={{ transform: count > 1 ? `translateX(-${displayIndex * 100}%)` : undefined }}
          >
            {slides.map((slide, i) => (
              <div key={slide.key} className="relative w-full shrink-0 px-0 sm:px-8" aria-hidden={i !== displayIndex}>
                <div
                  className={cn(
                    "relative mx-auto flex h-full max-h-[min(70vh,640px)] w-full items-center justify-center md:py-4",
                  )}
                >
                  <ProjectSlideImage slide={slide} sizes="(max-width: 768px) 100vw, 896px" priority={i === 0} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              className={cn(navBtnClass, "absolute top-1/2 left-2 -translate-y-1/2 max-sm:hidden")}
              onClick={() => go(-1)}
              aria-label={carouselPrevLabel}
            >
              <ChevronLeftIcon className="size-6" />
            </button>
            <button
              type="button"
              className={cn(navBtnClass, "absolute top-1/2 right-2 -translate-y-1/2 max-sm:hidden")}
              onClick={() => go(1)}
              aria-label={carouselNextLabel}
            >
              <ChevronRightIcon className="size-6" />
            </button>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:hidden">
          <button type="button" className={navBtnClass} onClick={() => go(-1)} aria-label={carouselPrevLabel}>
            <ChevronLeftIcon className="size-6" />
          </button>
          <p className="min-w-18 text-center text-sm text-zinc-600 tabular-nums dark:text-zinc-400">
            {displayIndex + 1} / {count}
          </p>
          <button type="button" className={navBtnClass} onClick={() => go(1)} aria-label={carouselNextLabel}>
            <ChevronRightIcon className="size-6" />
          </button>
        </div>
      ) : null}

      {count > 1 ? (
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.key}
              type="button"
              aria-label={`${carouselRegionAriaLabel}: ${i + 1} / ${count}`}
              aria-pressed={i === displayIndex}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                i === displayIndex ? "w-8 bg-cyan-500" : "w-2 bg-zinc-300 dark:bg-zinc-600",
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
