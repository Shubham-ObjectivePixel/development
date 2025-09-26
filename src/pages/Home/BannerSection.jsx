import { useLayoutEffect, useRef } from "react";
import { bannerImageIncrease, headingScrollMotion, headingFadeEffect } from "../../hooks/gsapAnimations";

const BannerSection = () => {
    const el = useRef();

    useLayoutEffect(() => {
        if (!el.current) return;

        const ctx = el.current;
        const cleanup1 = headingScrollMotion(".heading-motion", 10, el.current);
        const cleanup2 = headingFadeEffect(".title-fade-effect", 2, el.current);
        const cleanup3 = bannerImageIncrease(".imageAnimation", el.current, 2, el.current);

        return () => {
            cleanup1?.();
            cleanup2?.();
            cleanup3?.();
        };
    }, []);

    return (
        <>
            <section id="op-banner-section" ref={el} className="relative backdrop-blur-[12px] min-h-screen px-8">
                <div className="h-screen flex items-center">
                    <div className="container mx-auto flex flex-wrap h-full items-center relative">
                        <div className="w-full md:w-1/2 h-full flex items-center justify-end relative">
                            <div className="heading-motion">
                                <h1 className="text-white text-[6.5vw] uppercase leading-[108px] font-extrabold text-right relative title-fade-effect">
                                    I am here to <span className="text-op-green text-stroke-green">bring</span> your <span className="text-op-green text-stroke-green">vision</span> into life.
                                    {/* Lorem ipsum dolor sit amet consectetur. */}
                                </h1>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex items-center justify-end absolute left-0 top-0 z-10">
                            <div className="heading-motion">
                                <h6 className="text-op-transparent text-stroke uppercase text-[6.5vw] leading-[108px] font-extrabold text-right relative title-fade-effect">
                                    I am here to <span className="text-op-transparent text-stroke-green">bring</span> your <span className="text-op-transparent text-stroke-green">vision</span> into life.
                                    {/* Lorem ipsum dolor sit amet consectetur. */}
                                </h6>
                            </div>
                        </div>
                        <div className="w-full md:w-[60%] h-full flex items-center justify-end absolute right-8">
                            <div className="bg-black w-full h-[70vh] rounded-xl imageAnimation">
                                <div className="w-full h-full">
                                    <img src="../src/assets/images/demo.jpg" className="rounded-xl object-cover w-full h-full" alt=""></img>
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