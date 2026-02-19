import gsap from "gsap";

export function runAnimation() {
    const tl = gsap.timeline();

    tl.to("#element-404-1", {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
    })
        .to("#element-404-2", {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        })
        .to("#element-404-3", {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        })
        .to("#element-404-4", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        });
}