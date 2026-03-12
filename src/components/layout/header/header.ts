import gsap from "gsap";

export function runAnimation() {
    // Animation Desktop
    if (window.innerWidth >= 1024) {
        const tl = gsap.timeline();

        tl.to('#header-main', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"

        }).to('#header-main div', {
            delay: 0.5,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        });

        // Animation Mobile 
    } else {
        const tl = gsap.timeline();

        tl.to('#header-main', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        })
            .to("#logo", {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out"
            })
            .to("#header-mobile-button", {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out"
            });
    }
}
