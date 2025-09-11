import { useEffect, useRef } from "react"
import { bannerGlowMove, lineCircleMove } from "../../hooks/gsapAnimations"

import Navigation from "../../layouts/Navigation"

const BannerSection = () => {

    useEffect(() => {
        bannerGlowMove(".op-bg-glow", 6);
        lineCircleMove(".op-green-circle", 8);
    }, []);

    return (
        <>
            <section id="op-banner-section" className="relative">
                <div className="bg-op-darkBlue h-[150vh]">
                    <div className="op-bg-glow"></div>
                    <div className="op-line-wrapper">
                        <div className="h-[150vh] w-[1px] bg-op-white-25 fixed right-[25%] top-0 z-20">
                            <div className="op-green-circle w-[1px] h-[8px] bg-op-green absolute left-0"></div>
                        </div>
                    </div>-
                </div>
                <div className="h-[100vh] absolute top-0 left-0 w-full">
                    <div className="container h-full">
                        <div className="w-1/2 h-full flex items-center justify-end">
                            <h1 className="text-white text-[72px] leading-[108px] font-extrabold text-right">I am here to <span className="text-op-green">bring</span><br />your <span className="text-op-green">vision</span> into life.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <Navigation></Navigation>
        </>
    )
}

export default BannerSection