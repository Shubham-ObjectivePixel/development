import { useLayoutEffect, useRef } from "react";
import { bannerHeadingEffect, bannerTextEffect } from "../../hooks/gsapAnimations";

const BannerSection = () => {
    const el = useRef();

    useLayoutEffect(() => {
        if (!el.current) return;

        const ctx = el.current;
        const cleanup1 = bannerHeadingEffect(".branding-fade", el.current, 1.5, el.current);
        const cleanup2 = bannerTextEffect(".tagline-effect", el.current);

        return () => {
            cleanup1?.();
            cleanup2?.();
        };
    }, []);

    return (
        <>
            <section id="op-banner-section" ref={el} className="relative px-24">
                <div className="flex flex-wrap items-center content-center h-screen gap-8">
                    {/* <h1 className="text-white text-[10vw] w-full leading-[normal] text-left relative z-10 branding-fade">
                        Objective<span className="text-op-green">Pixel</span>
                    </h1>
                    <p className="text-white pt-4 text-3xl leading-normal tagline-effect">Creating websites that <span className="text-op-green">inspire</span> and connect.<br />I turn your vision into a strong online <span className="text-op-green">presence.</span></p> */}
                </div>
            </section>
        </>
    )
}

export default BannerSection