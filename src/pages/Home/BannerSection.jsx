import { useLayoutEffect, useRef } from "react";
import { bannerImageAnimation, bannerHeadingEffect } from "../../hooks/gsapAnimations";

const BannerSection = () => {
    const el = useRef();

    useLayoutEffect(() => {
        if (!el.current) return;

        const ctx = el.current;
        const cleanup1 = bannerHeadingEffect(".title-fade-effect", 1.5, el.current);
        const cleanup3 = bannerImageAnimation(".imageAnimation", el.current, 2, el.current);

        return () => {
            cleanup1?.();
            cleanup3?.();
        };
    }, []);

    return (
        <>
            <section id="op-banner-section" ref={el} className="relative px-8">
                <div className="flex flex-wrap items-center justify-center h-screen">
                    <h1 className="title-fade-effect text-[#fdfcfc] text-[10vw] leading-[normal] text-center relative">
                        Objective Pixel
                    </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center anotherSticky">
                    <img src="../src/assets/images/demo.jpg" className="rounded-xl w-full h-full imageAnimation" alt=""></img>
                </div>
            </section>
        </>
    )
}

export default BannerSection