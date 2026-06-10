import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const HERO_ROOT = "#presentation";

const SELECTORS = {
  frame: `${HERO_ROOT} [data-hero-enter="frame"]`,
  item: `${HERO_ROOT} [data-hero-enter="item"]`,
  visual: `${HERO_ROOT} [data-hero-enter="visual"]`,
  badge: `${HERO_ROOT} [data-hero-enter="badge"]`,
  scrollHint: `${HERO_ROOT} [data-hero-enter="scroll-hint"]`,
} as const;

function clearHeroPending(root: HTMLElement) {
  root.removeAttribute("data-hero-pending");
}

function setHeroInitialState(wide: boolean) {
  gsap.set(SELECTORS.frame, { autoAlpha: 0, scale: 0.94 });
  gsap.set(SELECTORS.item, { autoAlpha: 0, y: 26 });
  gsap.set(SELECTORS.visual, { autoAlpha: 0, x: wide ? 44 : 0, y: wide ? 0 : 28 });
  gsap.set(SELECTORS.badge, { autoAlpha: 0, y: 14 });
  gsap.set(SELECTORS.scrollHint, { autoAlpha: 0, y: 12 });
}

export function runHeroEntrance(onComplete?: () => void): () => void {
  const root = document.querySelector<HTMLElement>(HERO_ROOT);
  if (!root) {
    onComplete?.();
    return () => {};
  }

  if (prefersReducedMotion()) {
    clearHeroPending(root);
    gsap.set(`${HERO_ROOT} [data-hero-enter]`, { clearProps: "opacity,transform,visibility" });
    onComplete?.();
    return () => {};
  }

  const wide = window.innerWidth >= 1024;
  let timeline: gsap.core.Timeline | null = null;

  setHeroInitialState(wide);

  const ctx = gsap.context(() => {
    timeline = gsap.timeline({
      defaults: { ease: "power3.out", immediateRender: false },
      onComplete: () => {
        clearHeroPending(root);
        onComplete?.();
      },
    });

    timeline
      .to(SELECTORS.frame, { autoAlpha: 1, scale: 1, duration: 0.45, stagger: 0.07 }, 0)
      .to(SELECTORS.item, { autoAlpha: 1, y: 0, duration: 0.52, stagger: 0.075 }, 0.12)
      .to(
        SELECTORS.visual,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.62,
        },
        0.3,
      )
      .to(SELECTORS.badge, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.07 }, "-=0.28")
      .to(SELECTORS.scrollHint, { autoAlpha: 1, y: 0, duration: 0.38 }, "-=0.08");
  }, root);

  return () => {
    timeline?.kill();
    ctx.revert();
    clearHeroPending(root);
  };
}
