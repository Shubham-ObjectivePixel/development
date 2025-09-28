import { useLayoutEffect, useRef } from "react";
import { bannerImageIncrease, headingScrollMotion, headingFadeEffect } from "../../hooks/gsapAnimations";

const BannerSection = () => {
    const el = useRef();

    useLayoutEffect(() => {
        if (!el.current) return;

        const ctx = el.current;
        const cleanup1 = headingScrollMotion(".heading-motion", 10, el.current);
        const cleanup2 = headingFadeEffect(".title-fade-effect", 1, el.current);
        const cleanup3 = bannerImageIncrease(".imageAnimation", el.current, 2, el.current);

        return () => {
            cleanup1?.();
            cleanup2?.();
            cleanup3?.();
        };
    }, []);

    return (
        <>

        </>
    )
}

export default BannerSection