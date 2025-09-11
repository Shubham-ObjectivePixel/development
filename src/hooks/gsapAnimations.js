import gsap from "gsap";

export const bannerGlowMove = (target, delay = 0) => {
    gsap.fromTo(target, { opacity: 0.75, y: 0 }, { opacity: 1, y: -400, duration: 11, repeat: -1, repeatDelay: 1, yoyo: true, ease: "shine.inOut" });
};

export const scrollBarMove = (target, delay = 0) => {
    gsap.fromTo(target, { y: 0 }, { y: 3, delay, duration: 0.7, repeat: -1, yoyo: true, ease: "shine.inOut" });
}

export const lineCircleMove = (target, delay = 0) => {
    gsap.fromTo(target, { y: -10 }, { y: "150vh", duration: 15, repeat: -1, repeatDelay: 1, yoyo: false, ease: "shine.inOut" });
};