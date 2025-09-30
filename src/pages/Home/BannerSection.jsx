import { useLayoutEffect, useRef } from "react";
import { bannerImageAnimation, headingFadeEffect } from "../../hooks/gsapAnimations";

const BannerSection = () => {
    const el = useRef();

    useLayoutEffect(() => {
        if (!el.current) return;

        const ctx = el.current;
        // const cleanup1 = headingFadeEffect(".title-fade-effect", 1.5, el.current);
        // const cleanup2 = headingFadeEffect(".title-flip-effect", 1.5, el.current);
        // const cleanup3 = bannerImageAnimation(".imageAnimation", el.current, 2, el.current);

        return () => {
            // cleanup1?.();
            // cleanup2?.();
            // cleanup3?.();
        };
    }, []);

    return (
        <>
            <section id="op-banner-section" ref={el} className="relative min-h-screen px-8">
                <div className="h-screen flex items-center">
                    <div className="container mx-auto relative">
                        <div className="title-fade-effect absolute w-full z-10">
                            <h1 className="text-white text-[10vw] leading-[normal] text-center relative">
                                Objective Pixel
                            </h1>
                        </div>
                        <div className="absolute w-full">
                            <img src="../src/assets/images/demo.jpg" className="rounded-xl w-full h-full imageAnimation" alt=""></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerSection