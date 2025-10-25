import { useLayoutEffect, useRef } from "react";
import { pageHeadingAnimation, helpsListItems } from '../../hooks/gsapAnimations';

const HowCanIHelp = () => {

    const el = useRef();
    const elProject = useRef();

    useLayoutEffect(() => {
        if (!el.current && !elProject.current) return;
        const ctx = el.current;
        const cleanup1 = pageHeadingAnimation(".section__title--entrance", el.current, 1.5, el.current);
        const cleanup2 = helpsListItems(".helps-lists--items", el.current, 1.5, el.current);
        return () => {
            cleanup1?.();
            cleanup2?.();
        };
    }, []);

    return (
        <section ref={el} className={`bg-secondaryColor h-screen mt-10 mb-50 py-35`}>
            <div className="w-full h-full flex flex-wrap flex-col justify-center max-w-7xl px-4 mx-auto">
                <h2 className="section__title--entrance text-primaryColor text-[4vw] font-bold text-left leading-none ">Here's how I can help you</h2>
                <div className="helps-lists-type mt-15">
                    <div className="helps-lists--items py-10 px-4 border-t-1 border-primaryColor bg-secondaryColor">
                        <h3 className="text-primaryColor text-2xl font-medium text-left leading-none mb-2">Website design and development</h3>
                        <p className="text-primaryColor text-lg opacity-[.65]">Crafting fast, responsive, and visually engaging WordPress websites that align with your brand and business goals.</p>
                    </div>
                    <div className="helps-lists--items py-10 px-4 border-t-1 border-primaryColor bg-secondaryColor">
                        <h3 className="text-primaryColor text-2xl font-medium text-left leading-none mb-2">Performance optimization and bug fixes</h3>
                        <p className="text-primaryColor text-lg opacity-[.65]">Improving loading speed, responsiveness, and user experience while fixing issues that slow down or break your site.</p>
                    </div>
                    <div className="helps-lists--items py-10 px-4 border-t-1 border-b-1 border-primaryColor bg-secondaryColor">
                        <h3 className="text-primaryColor text-2xl font-medium text-left leading-none mb-2">Security and website recovery</h3>
                        <p className="text-primaryColor text-lg opacity-[.65]">Protecting your site from threats, removing malware, and ensuring stable, long-term performance with regular updates.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HowCanIHelp;
