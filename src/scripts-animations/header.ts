import gsap from "gsap";

export function runAnimation() {
    // Animation Desktop
    if (window.innerWidth >= 1024) {
        const tl = gsap.timeline();

        tl.from('#header-main', {
            y: -200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"

        }).from('#header-main div', {
            delay: 0.5,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        });

        // Animation Mobile 
    } else {
        const tl = gsap.timeline();

        tl.from('#header-main', {
            y: -200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        })
            .from("#logo", {
                x: -200,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            })
            .from("#header-mobile-button", {
                x: 200,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            });
    }
}


