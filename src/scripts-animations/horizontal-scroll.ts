import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function horizontal_scroll() {
    const wrapper = document.querySelector("#horizontal-scroll");
    if (!wrapper) return;

    const totalWidth = wrapper.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(wrapper, {
        x: () => -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-section",
            start: "top top",
            end: () => "+=" + (totalWidth - viewportWidth),
            scrub: true,
            pin: true,
            anticipatePin: 1
        }
    });
}