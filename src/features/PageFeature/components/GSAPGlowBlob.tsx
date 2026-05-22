"use client";

import { useEffect, useRef } from "react";

import { gsap } from "@/lib/gsap";
import { cn } from "@/utils/cn";

type GSAPGlowBlobProps = {
  className?: string;
  delay?: number;
};

export function GSAPGlowBlob({ className, delay = 0 }: GSAPGlowBlobProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const anim = gsap.to(el, {
      scale: 1.12,
      opacity: 0.5,
      duration: 3.5 + delay * 0.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay,
    });

    return () => {
      anim.kill();
    };
  }, [delay]);

  return <div ref={ref} className={cn(className)} aria-hidden="true" />;
}
