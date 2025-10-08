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
export const bannerHeadingEffect = (target, sectionTrigger, delay = 2, scope) => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 1 });
        const split = new SplitText(target, { type: "chars" });

        tl.fromTo(split.chars,
            { y: "-90px", opacity: 0, transformOrigin: "0% 50%" },
            {
                y: 0,
                opacity: 1,
                duration: delay,
                ease: "back.out(2)",
                stagger: {
                    each: 0.05,
                    from: "center",
                },
                onComplete: () => {
                    tl.to(target, {
                        scale: .8,
                        transformOrigin: "0% 50%",
                        duration: 9,
                        delay: 9,
                        ease: "linear",
                        scrollTrigger: {
                            trigger: sectionTrigger,
                            markers: true,
                            start: "center center",
                            end: "+=80% 73%",
                            pin: true,
                            pinSpacing: false,
                            pinSpacer: 20,
                            scrub: 1,
                        }
                    });
                }
            },
        );
    }, scope);
    return () => ctx.revert();
};
// export const bannerHeadingEffect = (target, sectionTrigger, delay = 2, scope) => {
//     const ctx = gsap.context(() => {
//         const split = new SplitText(target, { type: "chars" });

//         // Text intro animation
//         gsap.fromTo(split.chars,
//             { y: "-90px", opacity: 0, transformOrigin: "0% 50%" },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: delay,
//                 ease: "back.out(2)",
//                 stagger: { each: 0.05, from: "center" },
//             }
//         );

//         // ScrollTrigger for banner pin
//         ScrollTrigger.create({
//             trigger: sectionTrigger,
//             start: "top top",
//             end: "bottom top",
//             pin: true,
//             pinSpacing: false, // <– allows overlay of next section
//             pinSpacer: 20,
//             scrub: true,
//             markers: false,
//         });
//     }, scope);

//     return () => ctx.revert();
// };

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
export const VideoPlayOnScroll = (target, delay = 1, scope) => {
    const ctx = gsap.context(() => {

        const coolVideo = document.querySelector(target);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: target,
                start: "top top",
                end: "bottom+=60% bottom",
                scrub: 0.8,
                markers: false
            }
        });

        coolVideo.onloadedmetadata = function () {
            tl.to(coolVideo, { currentTime: coolVideo.duration });
        };

        function isTouchDevice() {
            return (
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
            );
        }
        if (isTouchDevice()) {
            coolVideo.play();
            coolVideo.pause();
        }


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
            ease: "back.out(2)",
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
export const fadeDownHeader = (target, delay = 3) => {
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

export const navigationVisible = (target, speed, scope) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(target, {
            autoAlpha: 0,
        },
            {
                autoAlpha: 1,
                duration: speed,
                ease: "none"
            }
        )
    }, scope);
}

export const navigationInVisible = (target, speed, scope) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(target, {
            autoAlpha: 1,
        }, {
            autoAlpha: 0,
            duration: speed,
            ease: "none",
        })
    }, scope);
}

export const mainNavigationVisible = (target, speed, scope) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(target, {
            autoAlpha: 0,
        },
            {
                autoAlpha: 1,
                duration: speed,
                delay: 0.5,
                ease: "none"
            }
        )
    }, scope);
}

export const mainNavigationInVisible = (target, speed, scope) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(target, {
            autoAlpha: 1,
        }, {
            autoAlpha: 0,
            duration: speed,
            ease: "none",
        })
    }, scope);
}

export const navigationBGVisible = (target, speed = 2, scope) => {
    const ctx = gsap.context(() => {
        gsap.to(target, {
            scale: 60,
            duration: speed,
            ease: "linear",
        });
    }, scope);
    return () => ctx.revert();
}

export const navigationBGInVisible = (target, speed = 2, scope) => {
    const ctx = gsap.context(() => {
        gsap.to(target, {
            scale: 0,
            duration: speed,
            ease: "linear",
        });
    }, scope);
    return () => ctx.revert();
}

export const closeButtonVisible = (target, speed = 2, scope) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(target, {
            autoAlpha: 0,
            scale: 0,
        },
            {
                autoAlpha: 1,
                scale: 1,
                duration: speed,
                ease: "power2.out"
            })
    }, scope);
}

export const closeButtonInVisible = (target, speed = 2, scope) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(target, {
            autoAlpha: 1,
            scale: 1,
        }, {
            autoAlpha: 0,
            scale: 0,
            duration: speed,
            ease: "power2.out",
        })
    }, scope);
}

export const RotateButton = (target, speed = 2, scope) => {
    const ctx = gsap.context(() => {
        gsap.to(target, {
            rotate: 360,        // keep adding rotation
            duration: 5,              // seconds per full spin
            ease: "linear",           // constant speed
            repeat: -1,               // infinite
            transformOrigin: "50% 50%" // rotate around center
        });
    }, scope);
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