import { useEffect, useRef } from "react"
import { bannerGlowMove, bannerImageIncrease, headingScrollMotion } from "../../hooks/gsapAnimations"

const BannerSection = () => {

    useEffect(() => {
        //bannerGlowMove(".op-bg-glow", 6);
        //headingScrollMotion(".heading-motion", 6);
        bannerImageIncrease(".imageAnimation", ".pinsection");
    }, []);

    return (
        <>
            <section id="op-banner-section" className="relative h-screen overflow-hidden px-8">
                <div className="pinsection h-full">
                    <div className="container mx-auto h-full">
                        <div class="flex flex-wrap items-center justify-end">
                            <div class="w-1/2 h-full relative z-10">
                                <h1 class="text-white text-[72px] leading-[108px] font-extrabold text-right heading-motion">
                                    {/* I am here to <span className="text-op-green">bring</span><br />
                                    your <span className="text-op-green">vision</span> into life. */}
                                </h1>
                            </div>
                            <div class="w-1/2 h-full">
                                <div class="bg-black border w-full h-[70vh] rounded-xl imageAnimation"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </>
    )
}

export default BannerSection