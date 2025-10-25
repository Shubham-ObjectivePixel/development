import { useLayoutEffect, useRef } from "react";
import { sectionTitleAnimation } from "../../hooks/gsapAnimations";

import Button from "../ui/Button";

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
        <section ref={el} className={`op-sec-scale-zoom px-8 ${setBG === "Yes" ? "bg-secondaryColor py-26 xl:px-24 lg:px-20 md:px-16 md:mx-20 mx-4" : ""} relative rounded-xl my-4 md:mx-4 mx-0 scale-[1] origin-top`}>
            <div className="flex flex-wrap flex-col items-center justify-center md:gap-16 gap-8">
                <p style={{ fontSize: `${fontSize}` }} className={`font-primaryFont section-title-animation ${setBG === "Yes" ? "text-primaryColor" : "text-secondaryColor"} text-center leading-[normal] font-semibold block`}>{CTAText}</p>
                <Button buttonLink={CTAbuttonLink} buttonText={CTAButtonText} setBG={setBG} />
            </div>
        </section>
    )
};

export default CTASection;
