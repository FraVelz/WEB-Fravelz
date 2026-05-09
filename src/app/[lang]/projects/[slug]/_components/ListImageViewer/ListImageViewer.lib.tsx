import type { Project } from "@/utils/data/project-types";
import { cn } from "@/utils/cn";

import Image, { type StaticImageData } from "next/image";

type Slide = { key: string; src: string | StaticImageData; alt: string };

export function buildSlides(project: Project, title: string): Slide[] {
  const slides: Slide[] = [
    {
      key: "featured",
      src: project.featuredImage,
      alt: `${title} — vista previa`,
    },
  ];
  let i = 0;
  for (const shot of project.screenshots ?? []) {
    slides.push({
      key: `screenshot-${i}`,
      src: shot,
      alt: `${title} — captura ${i + 1}`,
    });
    i += 1;
  }
  return slides;
}

export function ProjectSlideImage({
  slide,
  sizes,
  priority,
  className,
}: {
  slide: Slide;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const baseClass = cn("select-none h-auto max-h-full w-full max-w-full object-contain", className);

  if (typeof slide.src === "object") {
    return (
      <Image
        src={slide.src}
        alt={slide.alt}
        sizes={sizes}
        priority={priority}
        placeholder={slide.src.blurDataURL ? "blur" : undefined}
        className={baseClass}
        draggable={false}
      />
    );
  }

  return (
    <Image
      src={slide.src}
      alt={slide.alt}
      width={1200}
      height={800}
      sizes={sizes}
      priority={priority}
      className={baseClass}
      draggable={false}
    />
  );
}

export function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export type ListImagesViewerProps = {
  project: Project;
  title: string;
  /** Título opcional sobre el carrusel cuando hay más de una imagen. */
  galleryHeading?: string;
  carouselRegionAriaLabel: string;
  carouselPrevLabel: string;
  carouselNextLabel: string;
};
