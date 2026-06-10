"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function scheduleSkipTransition(setSkipTransition: (value: boolean) => void) {
  setSkipTransition(true);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => setSkipTransition(false));
  });
}

function snapCloneToReal(pos: number, count: number, setSkipTransition: (value: boolean) => void) {
  if (pos === 0) {
    scheduleSkipTransition(setSkipTransition);
    return count;
  }
  if (pos === count + 1) {
    scheduleSkipTransition(setSkipTransition);
    return 1;
  }
  return pos;
}

export function useInfiniteCarousel(count: number, swipeThreshold = 56) {
  const [position, setPosition] = useState(1);
  const [skipTransition, setSkipTransition] = useState(false);
  const positionRef = useRef(position);
  positionRef.current = position;
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const displayIndex =
    count <= 1
      ? 0
      : position === 0
        ? count - 1
        : position === count + 1
          ? 0
          : position - 1;

  const resetClonePosition = useCallback(() => {
    const pos = positionRef.current;
    if (count <= 1) return;
    if (pos === 0) {
      scheduleSkipTransition(setSkipTransition);
      setPosition(count);
    } else if (pos === count + 1) {
      scheduleSkipTransition(setSkipTransition);
      setPosition(1);
    }
  }, [count]);

  const onTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName !== "transform" || e.target !== e.currentTarget) return;
      resetClonePosition();
    },
    [resetClonePosition],
  );

  const setDisplayIndex = useCallback(
    (target: number) => {
      if (count <= 0) return;
      const next = ((target % count) + count) % count;

      setPosition((current) => {
        const pos = snapCloneToReal(current, count, setSkipTransition);
        const currentDisplay = pos - 1;
        if (next === currentDisplay) return pos;
        if (Math.abs(next - currentDisplay) > 1) {
          scheduleSkipTransition(setSkipTransition);
        }
        return next + 1;
      });
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1) return;
    if (position !== 0 && position !== count + 1) return;

    const timer = window.setTimeout(resetClonePosition, 320);
    return () => window.clearTimeout(timer);
  }, [count, position, resetClonePosition]);

  const navigateByDelta = useCallback(
    (delta: number) => {
      if (count <= 1) return;

      setPosition((current) => {
        const pos = snapCloneToReal(current, count, setSkipTransition);
        return pos + delta;
      });
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
        navigateByDelta(dx > 0 ? -1 : 1);
      }
    },
    [count, navigateByDelta, swipeThreshold],
  );

  return {
    position,
    displayIndex,
    skipTransition,
    setDisplayIndex,
    navigateByDelta,
    onTouchStart,
    onTouchEnd,
    onTransitionEnd,
  };
}
