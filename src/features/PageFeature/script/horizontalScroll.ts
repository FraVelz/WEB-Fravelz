import { gsap, ScrollTrigger } from "@/lib/gsap";

const HOME_SCROLL_LAYER = ".home-scroll-layer";

// Store references so we can destroy them later
let horizontalAnim: gsap.core.Tween | null = null;
let navClickHandler: ((e: MouseEvent) => void) | null = null;

export function getHorizontalAnim() {
  return horizontalAnim;
}

function getPanels() {
  return gsap.utils.toArray<HTMLElement>(`${HOME_SCROLL_LAYER} .panel`);
}

/** Paneles fuera de vista no reciben Tab (inert). El contenedor `.horizontal` no es enfocable. */
export function syncPanelsForHorizontalProgress(progress: number) {
  const panels = getPanels();
  if (panels.length === 0) return;

  const index = Math.min(panels.length - 1, Math.max(0, Math.round(progress * (panels.length - 1))));

  panels.forEach((panel, i) => {
    if (i === index) panel.removeAttribute("inert");
    else panel.setAttribute("inert", "");
  });
}

export function clearHorizontalPanelInert() {
  getPanels().forEach((panel) => panel.removeAttribute("inert"));
}

function focusPanel(panel: HTMLElement) {
  const heading = panel.querySelector<HTMLElement>("h2, h3");
  const focusable = panel.querySelector<HTMLElement>(
    "a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled)",
  );
  (focusable ?? heading)?.focus({ preventScroll: true });
}

export function horizontalScroll() {
  // Get all panels that will move horizontally
  const sections = getPanels();

  const container = document.querySelector<HTMLElement>(`${HOME_SCROLL_LAYER} .containera`);

  // If container or panels do not exist, stop execution
  if (!container || sections.length === 0) return;

  // Horizontal scrolling animation
  horizontalAnim = gsap.to(sections, {
    // Move panels horizontally based on the number of sections
    xPercent: -100 * (sections.length - 1),

    // No easing because scroll controls the animation
    ease: "none",

    scrollTrigger: {
      // Element that triggers the horizontal scroll behavior
      trigger: `${HOME_SCROLL_LAYER} .horizontal`,

      // Pin the section so it stays fixed while scrolling
      pin: true,

      // Smoothly sync animation with scroll position
      scrub: 1,

      // Define how long the scroll should last
      end: () => "+=" + (container.scrollWidth - window.innerWidth),

      onUpdate: (self) => syncPanelsForHorizontalProgress(self.progress),
    },
  });

  syncPanelsForHorizontalProgress(horizontalAnim.scrollTrigger?.progress ?? 0);

  // Handler for header navigation links
  // (Link.astro does not handle #header-nav-desktop correctly on desktop)
  navClickHandler = (e: MouseEvent) => {
    // Detect clicks inside the desktop navigation
    const link = (e.target as Element).closest<HTMLAnchorElement>("#header-nav-desktop a");
    if (!link) return;

    const id = link.getAttribute("href");

    // Ignore links that are not anchors
    if (!id || !id.startsWith("#")) return;

    // Prevent default browser anchor behavior
    e.preventDefault();
    e.stopImmediatePropagation();

    const targetId = id.slice(1);

    // #presentation is outside the horizontal scroll
    // so we scroll to the top normally
    if (targetId === "presentation") {
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 1,
        ease: "power2.inOut",
      });

      history.replaceState(null, "", id);
      return;
    }

    // Get the target panel
    const panel = document.getElementById(targetId);
    if (!panel || !horizontalAnim) return;

    const st = horizontalAnim.scrollTrigger;
    if (!st) return;

    // Find panel index
    const panels = getPanels();
    const index = panels.indexOf(panel as HTMLElement);
    if (index === -1) return;

    // Calculate the vertical scroll position that corresponds
    // to the panel's progress in the ScrollTrigger animation
    const safeLen = Math.max(panels.length - 1, 1);
    const progress = index / safeLen;
    const scrollPosition = st.start + progress * (st.end - st.start);

    // Smooth scroll to that calculated position
    gsap.to(window, {
      scrollTo: { y: scrollPosition, autoKill: false },
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        syncPanelsForHorizontalProgress(progress);
        focusPanel(panel as HTMLElement);
      },
    });

    history.replaceState(null, "", id);
  };

  // Attach click listener for navigation
  document.addEventListener("click", navClickHandler, true);
}

/** Recalcula posiciones tras redimensionar sin destruir la animación (viewport ≥ lg). */
export function refreshHorizontalScroll() {
  ScrollTrigger.refresh();
}

export function desactiveHorizontalScroll() {
  // Remove navigation click handler
  if (navClickHandler) {
    document.removeEventListener("click", navClickHandler, true);
    navClickHandler = null;
  }

  // Kill only the horizontal animation (preserve section reveal triggers)
  if (horizontalAnim) {
    horizontalAnim.scrollTrigger?.kill();
    horizontalAnim.kill();
    horizontalAnim = null;
  }

  clearHorizontalPanelInert();
}
