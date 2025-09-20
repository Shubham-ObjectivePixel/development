import { useEffect, useRef } from "react"
import { bannerGlowMove, bannerImageIncrease } from "../../hooks/gsapAnimations"

const BannerSection = () => {

    useEffect(() => {
        bannerGlowMove(".op-bg-glow", 6);
        //bannerImageIncrease(".onthis");
    }, []);

    return (
        <>
            <section id="op-banner-section" className="relative overflow-hidden h-[100vh]">
                <div className="container h-full">
                    <div className="flex flex-wrap items-center h-full relative">
                        <div className="w-1/2 h-full flex items-center justify-end relative z-10">
                            <h1 className="text-white text-[72px] leading-[108px] font-extrabold text-right">I am here to <span className="text-op-green">bring</span><br />your <span className="text-op-green">vision</span> into life.</h1>
                        </div>

                        <div className="absolute w-full">
                            <div className="flex flex-wrap items-center justify-end">
                                <div className="w-2/3 h-full">
                                    <div className="bg-black w-full h-[70vh] block rounded-xl onthis"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BannerSection