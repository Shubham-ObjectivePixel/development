import gsap from "gsap";

export const bannerGlowMove = (target, delay = 0) => {
    gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true })
        .fromTo(target,
            {
                opacity: 1,
                x: 0,
                y: 0,
                background: "linear-gradient(135deg, rgba(25 173 206 / 100%) 80%, rgba(0, 0, 0, 0) 100%)"
            },
            {
                opacity: 0.5,
                x: -200,
                y: -400,
                background: "linear-gradient(135deg, rgba(25 148 206 / 100%) 80%, rgba(0, 0, 0, 0) 100%)",
                duration: 11,
                ease: "shine.inOut"
            })
        .to(target,
            {
                opacity: 0.75,
                x: 0,
                y: -200,
                background: "linear-gradient(135deg, rgba(125 25 206 / 100%) 80%, rgba(0, 0, 0, 0) 100%)",
                duration: 11,
                ease: "shine.inOut"
            })
        .to(target,
            {
                opacity: 1,
                x: 0,
                y: 0,
                background: "linear-gradient(135deg, rgba(25 173 206 / 100%) 80%, rgba(0, 0, 0, 0) 100%)",
                duration: 11,
                ease: "shine.inOut"
            })
};

export const scrollBarMove = (target, delay = 0) => {
    gsap.fromTo(target, { y: 0 }, { y: 3, delay, duration: 0.7, repeat: -1, yoyo: true, ease: "shine.inOut" });
}