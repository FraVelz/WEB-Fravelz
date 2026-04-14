import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const DESKTOP_MQ = "(min-width: 1024px)";

const HEADER_TARGETS = ["#header-main", "#header-main div", "#logo", "#header-mobile-button"] as const;

function resetHeaderTweenState() {
  gsap.killTweensOf([...HEADER_TARGETS]);
  gsap.set(HEADER_TARGETS, { clearProps: "transform,opacity" });
}

function animateDesktop() {
  const tl = gsap.timeline();
  tl.to("#header-main", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
  }).to("#header-main div", {
    delay: 0.5,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
  });
}

function animateMobile() {
  const tl = gsap.timeline();
  tl.to("#header-main", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
  })
    .to("#logo", {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    })
    .to("#header-mobile-button", {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    });
}

export function runAnimation() {
  const mq = window.matchMedia(DESKTOP_MQ);

  const playForViewport = () => {
    resetHeaderTweenState();
    requestAnimationFrame(() => {
      if (mq.matches) {
        animateDesktop();
      } else {
        animateMobile();
      }
    });
  };

  playForViewport();
  mq.addEventListener("change", playForViewport);
}
