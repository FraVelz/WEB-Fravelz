import { cn } from "@/utils/cn";

import type { Slide } from "./ListImageViewer.data";

import Image from "next/image";

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
