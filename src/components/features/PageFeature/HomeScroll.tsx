"use client";

import {
  desactiveHorizontalScroll,
  horizontalScroll,
  refreshHorizontalScroll,
} from "@/components/features/PageFeature/script/horizontalScroll";
import { useEffect } from "react";

export default function HomeScroll() {
  useEffect(() => {
    let isActiveHorizontalScroll = false;

    function applyHorizontalScrollForViewport() {
      const wide = window.innerWidth >= 1024;
      if (wide) {
        if (!isActiveHorizontalScroll) {
          horizontalScroll();
          isActiveHorizontalScroll = true;
        } else {
          refreshHorizontalScroll();
        }
      } else if (isActiveHorizontalScroll) {
        desactiveHorizontalScroll();
        isActiveHorizontalScroll = false;
      }
    }

    applyHorizontalScrollForViewport();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer != null) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(applyHorizontalScrollForViewport, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      desactiveHorizontalScroll();
    };
  }, []);

  return null;
}
