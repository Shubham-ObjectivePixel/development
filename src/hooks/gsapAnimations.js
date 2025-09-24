import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

// Moving Shadows
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

// Mouse Scroller Move
export const scrollBarMove = (target, delay = 0) => {
    gsap.fromTo(target, { y: 0 }, { y: 3, delay, duration: 0.7, repeat: -1, yoyo: true, ease: "shine.inOut" });
};

// Increase Image Size on Scroll
export const bannerImageIncrease = (target, sectionTrigger) => {
    gsap.fromTo(target, {
        width: '65%',
        transformOrigin: "100% 50%",
    }, {
        width: '100%',
        delay: 0,
        scrollTrigger: {
            trigger: sectionTrigger,
            start: 'top top',
            end: '150% top',
            markers: true,
            pin: true,
            pinSpacing: true,
            scrub: 2,
            ease: 'power4.inOut'
        }
    });
};

// Heading 3d Moving Animation
export const headingScrollMotion = (target, delay = 2) => {
    gsap.fromTo(target, {
        y: 180,
        duration: delay,
        ease: "power3.out",
    }, {
        y: 100,
        ease: "power3.out",
        scrollTrigger: {
            trigger: target,
            start: "bottom 80%",
            end: "top top",
            scrub: 2,
            markers: false
        }
    });
};