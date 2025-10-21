import { useLayoutEffect, useRef } from "react";
import { sectionTitleAnimation } from "../../hooks/gsapAnimations";

const CTASection = ({ CTAText, CTAbuttonLink, CTAButtonText, setBG, fontSize }) => {

    const el = useRef();

    useLayoutEffect(() => {
        if (!el.current) return;
        const ctx = el.current;
        const cleanup1 = sectionTitleAnimation(".section-title-animation", el.current, 0.5, el.current);
        return () => {
            cleanup1?.();
        };
    }, []);

    return (
        <section ref={el} className={`op-sec-scale-zoom px-8 ${setBG === "Yes" ? "bg-secondaryColor py-26 xl:px-24 lg:px-20 md:px-16 mx-20" : ""} relative rounded-xl my-4 mx-4 scale-[1] origin-top`}>
            <div className="flex flex-wrap flex-col items-center justify-center md:gap-16 gap-8">
                <p style={{ fontSize: `${fontSize}` }} className={`font-primaryFont section-title-animation ${setBG === "Yes" ? "text-primaryColor" : "text-secondaryColor"} text-center leading-[normal] font-semibold block`}>{CTAText}</p>
                <a href={CTAbuttonLink} className={`inline-block rounded-full px-10 py-4 transition duration-700 transition-discrete font-bold leading-none uppercase border border-solid border-acentColor bg-acentColor text-primaryColor ${setBG === "Yes" ? "hover:border-primaryColor hover:bg-transparent hover:text-primaryColor" : "hover:border-secondaryColor hover:bg-transparent hover:text-secondaryColor"}`}>{CTAButtonText}</a>
            </div>
        </section>
    )
};

export default CTASection;
