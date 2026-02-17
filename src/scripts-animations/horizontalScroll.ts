import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function horizontalScroll() {

    // Desplazamiento horizontal
    const sections = gsap.utils.toArray<HTMLElement>(".panel");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => {
                const container = document.querySelector<HTMLElement>(".containera");
                return container ? "+=" + container.scrollWidth : "+=0";
            }
        }
    });

    // Navigation with links
    const links = document.querySelectorAll<HTMLAnchorElement>("nav a");
    const horizontalSection = document.querySelector<HTMLElement>(".horizontal");

    if (!horizontalSection) return;

    links.forEach((link, i) => {
        link.addEventListener("click", e => {
            e.preventDefault();

            gsap.to(window, {
                scrollTo: {
                    y: horizontalSection.offsetTop + i * window.innerWidth,
                },
                duration: 1
            });
        });
    });
}