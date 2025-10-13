import { useLayoutEffect, useRef } from "react";
import { sectionTitleAnimation } from "../../hooks/gsapAnimations";

const CTASection = () => {

    const el = useRef();

    useLayoutEffect(() => {
    if (!el.current) return;
    const ctx = el.current;
    const cleanup1 = sectionTitleAnimation(".section-title-animation", el.current, 1.5, el.current);
        return () => {
            cleanup1?.();
        };
    }, []);

    return (
        <section ref={el} className="op-sec-scale-zoom xl:px-24 lg:px-20 md:px-16 px-8 py-24 bg-secondaryColor relative rounded-xl m-4 scale-[1] origin-top">
            <div className="flex flex-wrap items-center justify-center md:gap-16 gap-8">
                <h2 className="section-title-animation text-primaryColor text-[8vw] text-center leading-[normal] opacity-[0.01]">No magic formula just Consistent effort.</h2>
                <a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete bg-gradientColor text-black font-medium leading-none">About Me</a>
            </div>
        </section>
    )
};

export default CTASection;
