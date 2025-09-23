import { useEffect, useRef } from "react"
import { bannerGlowMove, bannerImageIncrease, headingScrollMotion } from "../../hooks/gsapAnimations"

const BannerSection = () => {

    useEffect(() => {
        bannerGlowMove(".op-bg-glow", 6);
        headingScrollMotion(".heading-motion", 6)
        //bannerImageIncrease();
    }, []);

    return (
        <>
            <section id="op-banner-section" className="relative h-screen overflow-hidden px-8">
                <div className="container mx-auto h-full relative">
                    <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-end z-10">
                        <h1 className="text-white text-[72px] leading-[108px] font-extrabold text-right heading-motion">
                            I am here to <span className="text-op-green">bring</span><br />
                            your <span className="text-op-green">vision</span> into life.
                        </h1>
                    </div>
                    <div className="flex items-center justify-end h-full">
                        <div className="w-2/3 h-[70vh]">
                            <div className="bg-black w-full h-full rounded-xl this-animate"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerSection