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
            <section id="op-banner-section" className="relative min-h-screen px-8">
                <div className="pinsection h-screen flex items-center">
                    <div className="container mx-auto flex flex-wrap h-full items-center">
                        <div class="w-full md:w-1/2 h-full flex items-center justify-end">
                            <h1 class="text-white text-[72px] leading-[108px] font-extrabold text-right heading-motion relative z-10">
                                I am here to <span className="text-op-green">bring</span><br />
                                your <span className="text-op-green">vision</span> into life.
                            </h1>
                        </div>
                        <div class="w-full md:w-1/2 h-full flex items-center">
                            <div class="bg-black w-full h-[70vh] rounded-xl imageAnimation"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerSection