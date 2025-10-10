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
            <section id="op-banner-section" ref={el} className="relative xl:px-24 lg:px-20 md:px-16 px-8 bg-op-darkBlue overflow-hidden h-screen bg-soft">
                <BannerVideo />
                <div className="flex flex-wrap items-center content-center h-screen md:gap-8 gap-4">
                    <h1 className="text-white font-medium text-[12vw] w-full leading-[normal] text-left relative z-10 branding-fade">
                        Objective<span className="text-op-green">Pixel</span>
                    </h1>
                    <p className="text-white md:pt-4 pt-0 lg:text-3xl text-2xl leading-normal tagline-effect inline-block md:flex flex-wrap flex-col">
                        <span>Creating websites that <span className="text-op-green">inspire</span> and connect.</span>
                        <span>I turn your vision into a strong online <span className="text-op-green">presence</span>.</span>
                    </p>
                </div>
            </section>
            <section className="xl:px-24 lg:px-20 md:px-16 px-8 py-24">
                <div className="flex flex-wrap items-center justify-center md:gap-16 gap-8">
                    <h2 className="text-[8vw] text-center leading-auto">No magic formula just Consistent effort.</h2>
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" style={{ marginBottom: "0", marginRight: "0", width: "100%", padding: "8px", height: "auto", background: "#f45129", fontWeight: 600 }} value="Get My Free Checklist"/>
                </div>
            </section>
        </>
    )
}

export default BannerSection