import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function runAnimation() {
    const header = document.querySelector("#header-main");
    if (!header) return;

    gsap.fromTo(header,
        { backgroundColor: "rgba(0,0,0,0)" },
        {
            backgroundColor: () => {
                return window.getComputedStyle(header).backgroundColor;
            },
            scrollTrigger: {
                trigger: header,
                start: "top top",
                end: "+=100",
                scrub: true,
                markers: true
            }
        }
    );
}
