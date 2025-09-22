import { useEffect, useRef } from "react"
import { bannerGlowMove} from "../../hooks/gsapAnimations"

const BannerSection = () => {

    useEffect(() => {
        bannerGlowMove(".op-bg-glow", 6);
    }, []);

    return (
        <>
            <section id="op-banner-section" className="relative overflow-hidden">
                <div className="w-[1px] h-[100vh] bg-op-white-10 absolute top-0 left-[75%] z-20"></div>
                <div className="bg-op-darkBlue h-[100vh]">
                    <div className="op-bg-glow"></div>
                </div>
                <div className="h-[100vh] absolute top-0 left-0 w-full">
                    <div className="container h-full">
                        <div className="w-1/2 h-full flex items-center justify-end">
                            <h1 className="text-white text-[72px] leading-[108px] font-extrabold text-right">I am here to <span className="text-op-green">bring</span><br />your <span className="text-op-green">vision</span> into life.</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerSection