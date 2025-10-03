import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Welcome Heading Animation
 * @param {string} target - selector of the heading
 * @param {number} delay - duration
 * @param {HTMLElement} - gsap.context scope element
 */
export const bannerHeadingEffect = (target, sectionTrigger, delay = 2, scope, nextAnim) => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 1 });
        const split = new SplitText(target, { type: "chars" });

        tl.fromTo(split.chars,
            { rotateY: 75, y: 0, opacity: 0, transformOrigin: "0% 50%" },
            {
                rotateY: 0,
                y: 30,
                opacity: 1,
                duration: delay,
                ease: "elastic.out(1,0.3)",
                stagger: 0.10,
                onComplete: () => {
                    tl.to(target, {
                        scale: 1.3,
                        transformOrigin: "0% 50%",
                        duration: 9,
                        delay: 9,
                        ease: "linear",
                        scrollTrigger: {
                            trigger: sectionTrigger,
                            markers: false,
                            start: "bottom bottom",
                            end: "+=80% bottom",
                            pin: true,
                            pinSpacing: true,
                            pinSpacer: 20,
                            scrub: 1,
                            anticipatePin: 1,
                        }
                    });
                }
            },
        );
    }, scope);
    return () => ctx.revert();
};

/**
 * Welcome Tagline Animation
 * @param {string} target - selector of the heading
 * @param {number} delay - duration
 * @param {HTMLElement} - gsap.context scope element
 */
export const bannerTextEffect = (target, scope) => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 3 });
        const split = new SplitText(target, { type: "words" });

        tl.fromTo(split.words,
            { opacity: 0, transformOrigin: "50% 50%" },
            {
                opacity: 1,
                ease: "linear",
                stagger: 0.1,
            }
        );
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
        gsap.set(target, {});

        //Animation on Scroll
        gsap.to(target, {
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
export const MovingGlowAnimation = (target, delay = 0, scope) => {
    const ctx = gsap.context(() => {
        let tl = gsap.timeline({ repeat: -1, yoyo: true, delay: 2.5 });

        // Initial state
        gsap.set(target, {
            opacity: 0,
            x: 0,
            y: 0,
            background: "linear-gradient(135deg, rgba(25,173,206,1) 80%, rgba(0,0,0,0) 100%)",
        });

        tl.to(target, {
            opacity: 1,
            duration: 1,
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
export const scrollToExplore = (target, delay = 2) => {
    const ctx = gsap.context(() => {
        const split = new SplitText(target, { type: "chars" });
        gsap.set(split.chars, { opacity: 0.6 });

        const tl = gsap.timeline({ delay: delay, repeat: -1 });

        tl.to(split.chars, {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            stagger: {
                each: 0.1,
                repeat: 1,
                yoyo: true
            }
        });
    });

    return () => ctx.revert();
};


/**
 * Header Fade Down
 * @param {string} target - Selector of the element
 * @param {number} delay - Duration
 * @param {HTMLElement} scope - gsap.context scope element
 */
export const fadeDownHeader = (target, delay = 5) => {
    const ctx = gsap.context(() => {
        gsap.set(target, {
            y: '-100%',
        });
        gsap.to(target, {
            y: 0,
            delay: delay,
            ease: "power2.out",
        })
    });

    return () => ctx.revert();
};


/**
 * Scrambling Text
 * @param {string} target - Selector of the element
 * @param {number} delay - Duration
 * @param {HTMLElement} scope - gsap.context scope element
 * @param {string} textValue - Text in output
 */
export const scramblingText = (target, speed = 2, scope, textValue) => {

}

/**
 * Banner Box Animation (Increase width on scroll)
 * @param {string} target - selector of the element to animate
 * @param {HTMLElement} sectionTrigger - section DOM node to pin
 * @param {number} delay - animation duration
 * @param {HTMLElement} scope - gsap.context scope element
 */
export const bannerImageAnimation = (target, sectionTrigger, delay = 2, scope) => {
    const ctx = gsap.context(() => {

        // Initial state
        gsap.set(target, { y: 0, scale: 0.6 });

        // After Load
        gsap.to(target, {
            y: "-40%",
            duration: 1.5,
            delay: 3.2,
            ease: "power2.out",
            onComplete: () => {
                // Animate width on scroll
                gsap.to(target, {
                    scale: 1,
                    duration: delay,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionTrigger,
                        start: "top top",
                        end: "top+=30%",
                        pin: true,
                        pinSpacing: true,
                        scrub: 1,
                        anticipatePin: 1,
                        markers: false,
                    },
                });
            }
            // onComplete: () => {
            //     ScrollTrigger.create({
            //         trigger: sectionTrigger,
            //         start: "top top",
            //         end: "bottom top",
            //         pin: target,
            //         pinSpacing: false,
            //         markers: true,
            //     });

            //     gsap.to(target, {
            //         scale: 1,
            //         duration: delay,
            //         ease: "power2.out",
            //         scrollTrigger: {
            //             trigger: sectionTrigger,
            //             start: "top top",
            //             end: "top+=20%",
            //             scrub: 1,
            //         },
            //     });
            // }
        });
    }, scope);

    return () => ctx.revert();
};