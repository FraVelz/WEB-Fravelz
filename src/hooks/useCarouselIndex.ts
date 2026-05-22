"use client";

import { useCallback, useRef, useState } from "react";

export type UseCarouselIndexOptions = {
  count: number;
  /** Umbral horizontal en px para cambiar de slide (About: 48, galería proyecto: 56). */
  swipeThreshold?: number;
  /** Evita que el swipe horizontal dispare scroll de página (slider About en home). */
  stopPropagationOnSwipe?: boolean;
};

export function useCarouselIndex({
  count,
  swipeThreshold = 48,
  stopPropagationOnSwipe = false,
}: UseCarouselIndexOptions) {
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

  const onTouchStart = useCallback((ev: React.TouchEvent) => {
    if (!ev.touches[0]) return;
    touchStartRef.current = { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStartRef.current;
      touchStartRef.current = null;
      if (!start || count <= 1) return;
      const t = e.changedTouches[0];
      if (!t) return;
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      if (Math.abs(dx) > swipeThreshold && Math.abs(dx) > Math.abs(dy)) {
        if (stopPropagationOnSwipe) {
          e.preventDefault();
          e.stopPropagation();
        }
        go(dx > 0 ? -1 : 1);
      }
    },
    [count, go, stopPropagationOnSwipe, swipeThreshold],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (count <= 1) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopPropagation();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        e.stopPropagation();
        go(1);
      }
    },
    [count, go],
  );

  return {
    displayIndex,
    setIndex,
    go,
    onTouchStart,
    onTouchEnd,
    onKeyDown,
  };
}
