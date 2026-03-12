import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let horizontalAnim: gsap.core.Tween | null = null;

export function horizontalScroll() {
    // Horizontal scrolling
    const sections = gsap.utils.toArray<HTMLElement>(".panel");
    const container = document.querySelector<HTMLElement>(".containera");

    if (!container) return;

    // Store the animation in the global variable
    horizontalAnim = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + container.scrollWidth
        }
    });

    // Navigation with links
    const links = document.querySelectorAll<HTMLAnchorElement>("#header-nav a");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            if (!horizontalAnim || !horizontalAnim.scrollTrigger) return;

            const targetId = link.getAttribute("href")?.replace("#", "");
            if (!targetId) return;

            const targetPanel = document.getElementById(targetId);
            if (!targetPanel) return;

            const sections = gsap.utils.toArray<HTMLElement>(".panel");
            const index = sections.indexOf(targetPanel);

            if (index === -1) return;

            const st = horizontalAnim.scrollTrigger;
            const total = sections.length - 1;
            const progress = index / total;

            const scrollPosition = st.start + (st.end - st.start) * progress;

            gsap.to(window, {
                scrollTo: scrollPosition,
                duration: 1,
                ease: "power2.inOut"
            });
        });
    });
}

export function desactiveHorizontalScroll() {
    // Destroy the horizontal animation if it exists
    if (horizontalAnim) {
        horizontalAnim.scrollTrigger?.kill(); // destroys the ScrollTrigger
        horizontalAnim.kill(); // destroys the animation
        horizontalAnim = null;
    }

    // Also make sure there are no leftover triggers
    ScrollTrigger.getAll().forEach(st => st.kill());
}