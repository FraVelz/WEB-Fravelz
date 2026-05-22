"use client";

import { useEffect } from "react";

import { gsap } from "@/lib/gsap";
import {
  desactiveHorizontalScroll,
  getHorizontalAnim,
  horizontalScroll,
  refreshHorizontalScroll,
} from "./script/horizontalScroll";

/** Hero y contacto: entrada vertical al hacer scroll */
const VERTICAL_REVEAL_FROM = { opacity: 0, y: 80, scale: 0.9 };
const VERTICAL_REVEAL_TO = {
  opacity: 1,
  y: 0,
  scale: 1,
  ease: "none" as const,
};

/** Paneles horizontales: entrada lateral (eje X) */
const PANEL_REVEAL_FROM = { opacity: 0, x: 140, scale: 0.94 };
const PANEL_REVEAL_TO = {
  opacity: 1,
  x: 0,
  scale: 1,
  ease: "none" as const,
};

/** Paneles en móvil (apilados): deslizamiento lateral más suave */
const PANEL_REVEAL_FROM_MOBILE = { opacity: 0, x: 72, scale: 0.96 };

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function killRevealAnimations(animations: gsap.core.Tween[]) {
  animations.forEach((anim) => {
    anim.scrollTrigger?.kill();
    anim.kill();
  });
  animations.length = 0;
}

function setupSectionReveals(animations: gsap.core.Tween[]) {
  killRevealAnimations(animations);

  const root = document.querySelector<HTMLElement>(".home-scroll-layer");
  if (!root) return;

  const verticalNodes = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-home-reveal]"));
  const panelNodes = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-home-panel-reveal]"));
  const allNodes = [...verticalNodes, ...panelNodes];
  const panels = gsap.utils.toArray<HTMLElement>(".panel");
  const horizontalSection = document.querySelector<HTMLElement>(".horizontal");

  if (prefersReducedMotion()) {
    gsap.set(allNodes, { clearProps: "opacity,transform,willChange" });
    return;
  }

  const wide = window.innerWidth >= 1024;
  const horizontalAnim = getHorizontalAnim();

  verticalNodes.forEach((el) => {
    const anim = gsap.fromTo(el, VERTICAL_REVEAL_FROM, {
      ...VERTICAL_REVEAL_TO,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "top 35%",
        scrub: 0.45,
        invalidateOnRefresh: true,
      },
    });
    animations.push(anim);
  });

  panelNodes.forEach((el) => {
    const panel = el.closest<HTMLElement>(".panel");
    const trigger = panel ?? el;
    const panelIndex = panel ? panels.indexOf(panel) : -1;
    const isFirstPanel = panelIndex === 0;

    if (wide && panel && horizontalAnim && isFirstPanel && horizontalSection) {
      const anim = gsap.fromTo(el, PANEL_REVEAL_FROM, {
        ...PANEL_REVEAL_TO,
        immediateRender: false,
        scrollTrigger: {
          trigger: horizontalSection,
          start: "top 88%",
          end: "top 28%",
          scrub: 0.55,
          invalidateOnRefresh: true,
        },
      });
      animations.push(anim);
      return;
    }

    if (wide && panel && horizontalAnim) {
      const anim = gsap.fromTo(el, PANEL_REVEAL_FROM, {
        ...PANEL_REVEAL_TO,
        immediateRender: false,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalAnim,
          start: "left 92%",
          end: "left 38%",
          scrub: 0.55,
          invalidateOnRefresh: true,
        },
      });
      animations.push(anim);
      return;
    }

    const anim = gsap.fromTo(el, PANEL_REVEAL_FROM_MOBILE, {
      ...PANEL_REVEAL_TO,
      immediateRender: false,
      scrollTrigger: {
        trigger,
        start: "top bottom",
        end: "top 42%",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
    animations.push(anim);
  });
}

export default function HomeScroll() {
  useEffect(() => {
    let isActiveHorizontalScroll = false;
    const revealAnimations: gsap.core.Tween[] = [];

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

      setupSectionReveals(revealAnimations);
      refreshHorizontalScroll();
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
      killRevealAnimations(revealAnimations);
      desactiveHorizontalScroll();
    };
  }, []);

  return null;
}
