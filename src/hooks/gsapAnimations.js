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

export const bannerImageIncrease = () => {
    // ensure initial state before any rendering flicker
    gsap.set(".this-animate", {
      scaleX: 0.5,
      transformOrigin: "right center",
    });
  
    // main scroll-driven tween
    gsap.to(".this-animate", {
      scaleX: 1.23,               // your target scale (1.0 = 100%); keep 1.23 if intended
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#op-banner-section",
        start: "top top",        // pin when section top hits viewport top
        end: "+=100%",           // pin for 1 viewport height (no huge spacer)
        scrub: 1.5,              // smooth catch-up
        pin: true,               // pin the section during the animation
        pinSpacing: false,       // avoid extra white space after unpin
        anticipatePin: 1,
        markers: true,           // remove in production
        invalidateOnRefresh: true
      }
    });
  
    // force recalculation after layout/fonts/images load
    ScrollTrigger.refresh();
  };

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