import gsap from "gsap";

export function runAnimation() {
    const tl = gsap.timeline();

    tl.from("#element-404-1", {
        x: -200,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    })
        .from("#element-404-2", {
            x: 200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .from("#element-404-3", {
            x: -200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .from("#element-404-4", {
            y: 200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        });
}