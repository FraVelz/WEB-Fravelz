import type { StaticImageData } from "next/image";

import type { Project } from "@/utils/data/project-types";

export type Slide = { key: string; src: string | StaticImageData; alt: string };

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

export type ListImagesViewerProps = {
  project: Project;
  title: string;
  /** Título opcional sobre el carrusel cuando hay más de una imagen. */
  galleryHeading?: string;
  carouselRegionAriaLabel: string;
  carouselPrevLabel: string;
  carouselNextLabel: string;
};
