import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Banner Box Animation (Increase width on scroll)
 * @param {string} target - selector of the element to animate
 * @param {HTMLElement} sectionTrigger - section DOM node to pin
 * @param {number} delay - animation duration
 * @param {HTMLElement} scope - gsap.context scope element
 */
export const bannerImageIncrease = (target, sectionTrigger, delay = 2, scope) => {
    const ctx = gsap.context(() => {
        
        // Initial state
        gsap.set(target, { width: "65%", transformOrigin: "100% 50%" });

        // Animate width on scroll
        gsap.to(target, {
            width: "100%",
            duration: delay,
            ease: "linear",
            scrollTrigger: {
                trigger: sectionTrigger,
                start: "top top",
                end: "+=100%",
                pin: true,
                pinSpacing: true,
                scrub: 2,
                anticipatePin: 1,
                markers: false,
            },
        });
    }, scope);

    return () => ctx.revert();
};

/**
 * Heading Fade Effects
 * @param {string} target - selector of the heading
 * @param {number} delay - duration
 * @param {HTMLElement} - gsap.context scope element
 */
export const headingFadeEffect = (target, delay = 2, scope) => {
    const ctx = gsap.context(() => {
        const elements = document.querySelectorAll(target);
        const tl = gsap.timeline();

        elements.forEach((element, index) => {
            tl.fromTo(element,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: delay,
                    ease: "linear",
                    // If not the first element, delay the start
                    delay: index === 0 ? 0 : delay * index
                }
            );
        });
    }, scope);
    return () => ctx.revert();
};


/**
 * Heading Scroll Motion
 * @param {string} target - selector of the heading
 * @param {number} delay - duration
 * @param {HTMLElement} scope - gsap.context scope element
 */
export const headingScrollMotion = (target, delay = 2, scope) => {
    const ctx = gsap.context(() => {
        // Initial state
        gsap.set(target, { y: 180 });

        //Animation on Scroll
        gsap.to(target, {
                y: 100,
                duration: delay,
                ease: "linear",
                scrollTrigger: {
                    trigger: target,
                    start: "bottom 50%",
                    end: "bottom top",
                    scrub: 1.5,
                    markers: false,
                },
            }
        );
    }, scope);

    return () => ctx.revert();
};

/**
 * Moving Glow Background
 * @param {string} target - selector of the background element
 * @param {number} delay - duration
 * @param {HTMLElement} scope - gsap.context scope element
 */
export const bannerGlowMove = (target, delay = 0, scope) => {
    const ctx = gsap.context(() => {
        let tl = gsap.timeline({ repeat: -1, yoyo: true });

        // Initial state
        gsap.set(target, {
            opacity: 0,
            x: 0,
            y: 0,
            background: "linear-gradient(135deg, rgba(25,173,206,1) 80%, rgba(0,0,0,0) 100%)",
        });

        tl.to(target,{
            opacity: 1,
            duration: 6,
        })
            .to(target, {
                opacity: 0.5,
                x: -200,
                y: -400,
                background: "linear-gradient(135deg, rgba(25,148,206,1) 80%, rgba(0,0,0,0) 100%)",
                duration: delay,
                ease: "linear",
            })
            .to(target, {
                opacity: 0.75,
                x: 0,
                y: -200,
                background: "linear-gradient(135deg, rgba(125,25,206,1) 80%, rgba(0,0,0,0) 100%)",
                duration: delay,
                ease: "linear",
            })
            .to(target, {
                opacity: 1,
                x: 0,
                y: 0,
                background: "linear-gradient(135deg, rgba(25,173,206,1) 80%, rgba(0,0,0,0) 100%)",
                duration: delay,
                ease: "linear",
            });
    }, scope);

    return () => ctx.revert();
};

/**
 * Mouse Scroller Move
 * @param {string} target - selector of the element
 * @param {number} delay - duration
 * @param {HTMLElement} scope - gsap.context scope element
 */
export const scrollBarMove = (target, delay = 0, scope) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(target, { y: 0 }, { y: 3, duration: 0.7, repeat: -1, yoyo: true, ease: "linear", delay });
    }, scope);

    return () => ctx.revert();
};
