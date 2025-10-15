import { useLayoutEffect, useRef } from "react";
import BannerVideo from "../ui/BannerVideo";
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
            <section id="op-banner-section" ref={el} className="relative xl:px-24 lg:px-20 md:px-16 px-8 bg-primaryColor overflow-hidden h-screen bg-soft">
                {/* <BannerVideo /> */}
                <div className="flex flex-wrap items-center justify-end content-center h-screen md:gap-8 gap-4">
                    <h1 className="text-secondaryColor font-bold xl:text-[12vw] text-[10vw] w-full leading-[normal] text-left relative z-10 branding-fade">
                        Objective<span className="text-acentColor">Pixel</span>
                    </h1>
                    <p className="text-secondaryColor md:pt-4 pt-0 lg:text-3xl text-2xl leading-normal tagline-effect inline-block md:flex flex-wrap flex-col">
                        <span>Creating websites that inspire and connect.</span>
                        <span>I turn your vision into a strong online presence.</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default BannerSection