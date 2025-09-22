import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger,SplitText);

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
};

export const bannerImageIncrease = (target) => {
    gsap.fromTo(target,
        { scaleX: 0.3 },
        {
            scaleX: 1,
            duration: 3,
            scrollTrigger: {
                trigger: target,
                start: "bottom 80%",
                end: "bottom",
                scrub: true,
                pin: true,
                markers: true
            }
        });
};

export const headingScrollMotion = (target, delay = 2) => {
    gsap.from(target, {
        scrollTrigger: {
            trigger: target,
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            markers: true
        },
        y: 250,
        opacity: 0,
        duration: delay,
        ease: "power4.out",
    });
};

export const titleEntranceText = (target) => {
    
};


// Function Code:
//     ---------------
//     // Split text into spans for staggered animation
//         animatedText.innerHTML = animatedText.textContent
//           .split("")
//           .map((char) => `<span>${char}</span>`)
//           .join("");
  
//         gsap.from(animatedText.querySelectorAll("span"), {
//           scrollTrigger: {
//             trigger: animatedText,
//             start: "top 85%",
//             end: "top 35%",
//             scrub: true,
//           },
//           opacity: 0,
//           y: 50,
//           duration: 1,
//           stagger: 0.1,
//         });

//     HTML Code:
//     ---------------
//     <section class="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative effect-section" data-effect="staggered-letters">
//           <button class="btn btn-dark position-absolute top-0 end-0 m-3 copy-btn">Copy Code</button>
//           <div class="row w-100">
//             <div class="col-12 text-center">
//               <h1 class="animated-text"><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">S</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">t</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">a</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">g</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">g</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">e</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">r</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">e</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">d</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;"> </span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">L</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">e</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">t</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">t</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">e</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">r</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">s</span></h1>
//             </div>
//           </div>
//         </section>