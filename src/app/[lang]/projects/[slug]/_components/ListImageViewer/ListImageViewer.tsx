"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/ChevronIcons";
import { projectHeroTransitionName } from "@/lib/project-view-transition";
import { cn } from "@/utils/cn";
import { useEffect, useEffectEvent, useMemo } from "react";
import { ViewTransition } from "react";

import { buildSlides, type ListImagesViewerProps } from "./ListImageViewer.data";
import { ProjectSlideImage } from "./ListImageViewer.lib";
import { useInfiniteCarousel } from "./useInfiniteCarousel";

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

  const {
    position,
    displayIndex,
    skipTransition,
    setDisplayIndex,
    navigateByDelta,
    onTouchStart,
    onTouchEnd,
    onTransitionEnd,
  } = useInfiniteCarousel(count, 56);

  const handlePrevious = () => navigateByDelta(-1);
  const handleNext = () => navigateByDelta(1);

  const navigateCarousel = useEffectEvent((delta: number) => {
    navigateByDelta(delta);
  });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (count <= 1) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateCarousel(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateCarousel(1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  const extendedSlides = useMemo(() => {
    if (count <= 1) return slides;
    const last = slides[count - 1];
    const first = slides[0];
    return [{ ...last, key: `${last.key}-clone-start` }, ...slides, { ...first, key: `${first.key}-clone-end` }];
  }, [slides, count]);

  if (slides.length === 0) return null;

  const navBtnClass = cn(
    "project-page-carousel-btn cursor-pointer z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
    "border border-[rgb(var(--color-drawer-border)/0.9)] bg-[rgb(var(--color-surface)/0.95)] text-[rgb(var(--color-text))]",
    "shadow-lg backdrop-blur-sm transition-[border-color,box-shadow,color] hover:border-cyan-500/60 hover:text-cyan-700",
    "dark:hover:border-cyan-400 dark:hover:text-cyan-300",
    "disabled:pointer-events-none disabled:opacity-40",
  );

  const showHeading = Boolean(galleryHeading && count > 1);
  const translateIndex = count > 1 ? position : 0;
  const slideCount = extendedSlides.length;
  const slideWidthPercent = slideCount > 0 ? 100 / slideCount : 100;
  const trackTranslatePercent = translateIndex * slideWidthPercent;

  return (
    <section className="mb-12" aria-label={carouselRegionAriaLabel}>
      {showHeading ? <h2 className="mb-4 text-2xl font-bold text-[rgb(var(--color-text))]">{galleryHeading}</h2> : null}

      <div
        className="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-[rgb(var(--color-drawer-border)/0.8)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-[16/10] max-h-[min(70vh,640px)] w-full overflow-hidden bg-[rgb(var(--color-card))] sm:aspect-[16/9] md:aspect-[21/11] md:max-h-none">
          <div
            className={cn(
              "flex h-full will-change-transform",
              !skipTransition && "transition-transform duration-300 ease-out",
              "motion-reduce:transform-none motion-reduce:transition-none",
            )}
            style={{
              width: count > 1 ? `${slideCount * 100}%` : undefined,
              transform: count > 1 ? `translateX(-${trackTranslatePercent}%)` : undefined,
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {extendedSlides.map((slide, i) => {
              const isActive = count > 1 ? i === position : i === 0;
              const shouldMorph = isActive && slide.key === "featured";
              const slideContent = (
                <div
                  className={cn(
                    "relative mx-auto flex h-full max-h-[min(70vh,640px)] w-full items-center justify-center px-0 sm:px-8 md:py-4",
                  )}
                >
                  <ProjectSlideImage
                    slide={slide}
                    sizes="(max-width: 768px) 100vw, 896px"
                    priority={i === 1 || (count <= 1 && i === 0)}
                  />
                </div>
              );

              return (
                <div
                  key={slide.key}
                  className="relative shrink-0"
                  style={{ width: count > 1 ? `${slideWidthPercent}%` : "100%" }}
                  aria-hidden={!isActive}
                >
                  {shouldMorph ? (
                    <ViewTransition name={projectHeroTransitionName(project.slug)} share="morph" default="none">
                      {slideContent}
                    </ViewTransition>
                  ) : (
                    slideContent
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              className={cn(navBtnClass, "absolute top-1/2 left-2 -translate-y-1/2 max-sm:hidden")}
              onClick={handlePrevious}
              aria-label={carouselPrevLabel}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              className={cn(navBtnClass, "absolute top-1/2 right-2 -translate-y-1/2 max-sm:hidden")}
              onClick={handleNext}
              aria-label={carouselNextLabel}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:hidden">
          <button type="button" className={navBtnClass} onClick={handlePrevious} aria-label={carouselPrevLabel}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <p className="min-w-18 text-center text-sm text-[rgb(var(--color-text-muted))] tabular-nums">
            {displayIndex + 1} / {count}
          </p>
          <button type="button" className={navBtnClass} onClick={handleNext} aria-label={carouselNextLabel}>
            <ChevronRightIcon className="h-6 w-6" />
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
              className="project-page-carousel-dot flex h-8 w-8 items-center justify-center rounded-full"
              onClick={() => setDisplayIndex(i)}
            >
              <span
                className={cn(
                  "block h-2 rounded-full transition-all duration-300",
                  i === displayIndex ? "w-8 bg-cyan-500" : "w-2 bg-[rgb(var(--color-drawer-border))]",
                )}
                aria-hidden
              />
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
