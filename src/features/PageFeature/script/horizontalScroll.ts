import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const HOME_SCROLL_LAYER = ".home-scroll-layer";

let horizontalAnim: gsap.core.Tween | null = null;
let navClickHandler: ((e: MouseEvent) => void) | null = null;
let focusScrollHandler: ((e: FocusEvent) => void) | null = null;
let keyboardNavHandler: ((e: KeyboardEvent) => void) | null = null;
let pointerNavHandler: (() => void) | null = null;
let scrollTween: gsap.core.Tween | null = null;
let keyboardNav = false;
let lastKeyboardPanelIndex: number | null = null;
let tabScrollHandled = false;

const FOCUSABLE_SELECTOR =
  'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';

export function getHorizontalAnim() {
  return horizontalAnim;
}

function getPanels() {
  return gsap.utils.toArray<HTMLElement>(`${HOME_SCROLL_LAYER} .panel`);
}

/** Quita `inert` residual; todos los paneles permanecen en el orden de Tab. */
export function clearHorizontalPanelInert() {
  getPanels().forEach((panel) => panel.removeAttribute("inert"));
}

function getPanelProgress(index: number) {
  const panels = getPanels();
  if (index < 0 || index >= panels.length) return null;
  const safeLen = Math.max(panels.length - 1, 1);
  return index / safeLen;
}

function getScrollYForPanelIndex(index: number) {
  const st = horizontalAnim?.scrollTrigger;
  const progress = getPanelProgress(index);
  if (!st || progress == null) return null;
  return st.start + progress * (st.end - st.start);
}

function isPanelAligned(index: number) {
  const st = horizontalAnim?.scrollTrigger;
  const progress = getPanelProgress(index);
  if (!st || progress == null) return true;
  return Math.abs(st.progress - progress) < 0.06;
}

/**
 * Mueve el scroll vertical ligado al scrub horizontal (misma curva que el pin).
 * `instant` usa ScrollTrigger.scroll() para no lanzar un tween aparte.
 */
function scrollToPanelIndex(index: number, options?: { duration?: number; ease?: string; instant?: boolean }) {
  const st = horizontalAnim?.scrollTrigger;
  const scrollY = getScrollYForPanelIndex(index);
  if (!st || scrollY == null) return;

  scrollTween?.kill();
  scrollTween = null;

  const instant = options?.instant ?? prefersReducedMotion();

  if (instant) {
    st.scroll(scrollY);
    ScrollTrigger.update();
    return;
  }

  scrollTween = gsap.to(window, {
    scrollTo: { y: scrollY, autoKill: true },
    duration: options?.duration ?? 0.5,
    ease: options?.ease ?? "none",
    overwrite: true,
    onComplete: () => {
      scrollTween = null;
    },
  });
}

function isTabFocusable(el: HTMLElement) {
  if (!el.matches(FOCUSABLE_SELECTOR)) return false;
  if (el.closest('[aria-hidden="true"], [inert]')) return false;
  if (el.tabIndex < 0) return false;
  if (typeof el.checkVisibility === "function" && !el.checkVisibility()) return false;
  return true;
}

function getTabOrderedFocusables() {
  return Array.from(document.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(isTabFocusable);
}

function getNextTabFocusable(backward: boolean) {
  const focusables = getTabOrderedFocusables();
  const active = document.activeElement;
  const currentIndex = active instanceof HTMLElement ? focusables.indexOf(active) : -1;

  if (currentIndex === -1) {
    return backward ? focusables.at(-1) ?? null : focusables[0] ?? null;
  }

  const nextIndex = backward ? currentIndex - 1 : currentIndex + 1;
  return focusables[nextIndex] ?? null;
}

function syncKeyboardPanelScroll(panelIndex: number, focusTarget?: HTMLElement) {
  if (!isPanelAligned(panelIndex)) {
    scrollToPanelIndex(panelIndex, { instant: true });
  }

  lastKeyboardPanelIndex = panelIndex;

  if (focusTarget) {
    focusTarget.focus({ preventScroll: true });
  }
}

function attachKeyboardNavDetection() {
  keyboardNavHandler = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

    keyboardNav = true;

    if (!horizontalAnim || window.innerWidth < 1024) return;

    const next = getNextTabFocusable(e.shiftKey);
    if (!next) return;

    const panel = next.closest<HTMLElement>(`${HOME_SCROLL_LAYER} .panel`);
    if (!panel) return;

    const panelIndex = getPanels().indexOf(panel);
    if (panelIndex === -1) return;

    const currentPanel = document.activeElement?.closest<HTMLElement>(`${HOME_SCROLL_LAYER} .panel`);
    const currentIndex = currentPanel ? getPanels().indexOf(currentPanel) : -1;

    if (panelIndex === currentIndex) return;

    e.preventDefault();
    tabScrollHandled = true;
    syncKeyboardPanelScroll(panelIndex, next);
  };

  pointerNavHandler = () => {
    keyboardNav = false;
  };

  document.addEventListener("keydown", keyboardNavHandler, true);
  document.addEventListener("mousedown", pointerNavHandler, true);
  document.addEventListener("touchstart", pointerNavHandler, true);
}

function detachKeyboardNavDetection() {
  if (keyboardNavHandler) {
    document.removeEventListener("keydown", keyboardNavHandler, true);
    keyboardNavHandler = null;
  }
  if (pointerNavHandler) {
    document.removeEventListener("mousedown", pointerNavHandler, true);
    document.removeEventListener("touchstart", pointerNavHandler, true);
    pointerNavHandler = null;
  }
  keyboardNav = false;
  lastKeyboardPanelIndex = null;
  tabScrollHandled = false;
}

function attachPanelFocusScroll() {
  focusScrollHandler = (e: FocusEvent) => {
    if (!horizontalAnim || window.innerWidth < 1024 || !keyboardNav) return;

    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    if (tabScrollHandled) {
      tabScrollHandled = false;
      target.focus({ preventScroll: true });
      return;
    }

    const panel = target.closest<HTMLElement>(`${HOME_SCROLL_LAYER} .panel`);
    if (!panel) {
      lastKeyboardPanelIndex = null;
      return;
    }

    const index = getPanels().indexOf(panel);
    if (index === -1) return;

    if (index === lastKeyboardPanelIndex) {
      target.focus({ preventScroll: true });
      return;
    }

    syncKeyboardPanelScroll(index, target);
  };

  document.addEventListener("focusin", focusScrollHandler, true);
}

function detachPanelFocusScroll() {
  if (!focusScrollHandler) return;
  document.removeEventListener("focusin", focusScrollHandler, true);
  focusScrollHandler = null;
}

export function horizontalScroll() {
  clearHorizontalPanelInert();

  const sections = getPanels();
  const container = document.querySelector<HTMLElement>(`${HOME_SCROLL_LAYER} .home-panels-track`);

  if (!container || sections.length === 0) return;

  horizontalAnim = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: `${HOME_SCROLL_LAYER} .horizontal`,
      pin: true,
      scrub: 1,
      end: () => "+=" + (container.scrollWidth - window.innerWidth),
    },
  });

  attachKeyboardNavDetection();
  attachPanelFocusScroll();

  navClickHandler = (e: MouseEvent) => {
    const link = (e.target as Element).closest<HTMLAnchorElement>("#header-nav-desktop a");
    if (!link) return;

    const id = link.getAttribute("href");
    if (!id || !id.startsWith("#")) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    const targetId = id.slice(1);

    if (targetId === "presentation") {
      scrollTween?.kill();
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: prefersReducedMotion() ? 0 : 1,
        ease: "power2.inOut",
      });

      history.replaceState(null, "", id);
      return;
    }

    const panel = document.getElementById(targetId);
    if (!panel || !horizontalAnim) return;

    const index = getPanels().indexOf(panel as HTMLElement);
    if (index === -1) return;

    lastKeyboardPanelIndex = index;
    scrollToPanelIndex(index, {
      duration: prefersReducedMotion() ? 0 : 1,
      ease: "power2.inOut",
      instant: prefersReducedMotion(),
    });
    history.replaceState(null, "", id);
  };

  document.addEventListener("click", navClickHandler, true);
}

export function refreshHorizontalScroll() {
  ScrollTrigger.refresh();
  clearHorizontalPanelInert();
}

export function desactiveHorizontalScroll() {
  if (navClickHandler) {
    document.removeEventListener("click", navClickHandler, true);
    navClickHandler = null;
  }

  detachPanelFocusScroll();
  detachKeyboardNavDetection();

  scrollTween?.kill();
  scrollTween = null;

  if (horizontalAnim) {
    horizontalAnim.scrollTrigger?.kill();
    horizontalAnim.kill();
    horizontalAnim = null;
  }

  clearHorizontalPanelInert();
}
