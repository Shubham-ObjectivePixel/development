import { useLayoutEffect, useRef } from "react";
import { pageHeadingAnimation } from '../../hooks/gsapAnimations';

const HowCanIHelp = () => {

    const el = useRef();
    const elProject = useRef();

    useLayoutEffect(() => {
        if (!el.current && !elProject.current) return;
        const ctx = el.current;
        const cleanup1 = pageHeadingAnimation(".section__title--entrance", el.current, 1.5, el.current);
        return () => {
            cleanup1?.();
        };
    }, []);

    return (
        <section ref={el} className={`bg-secondaryColor h-screen mt-50 py-35`}>
            <div className="w-full max-w-7xl px-4 mx-auto">
                <h2 className="section__title--entrance text-primaryColor text-[4vw] font-bold text-left leading-none ">Here's how I can help you</h2>
            </div>
        </section>
    )
};

export default HowCanIHelp;
