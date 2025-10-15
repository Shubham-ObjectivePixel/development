import { useLayoutEffect, useRef } from "react";
import { pageHeadingAnimation } from '../../hooks/gsapAnimations';

const ProjectsSection = () => {

    const el = useRef();

    useLayoutEffect(() => {
        if (!el.current) return;
        const ctx = el.current;
        const cleanup2 = pageHeadingAnimation(".section__title--entrance", el.current, 1.5, el.current);
        return () => {
            cleanup2?.();
        };
    }, []);

    return (
        <section ref={el} className="h-[200vh] relative z-10 xl:px-24 lg:px-20 md:px-16 px-8 xl:py-40 lg:py-20 md:py-16 py-8 section opacity-[0.02]">
            <h2 className="section__title--entrance text-secondaryColor uppercase text-[15vw] font-bold text-left leading-none ">Work</h2>
            <p className="lg:text-3xl text-2xl text-white">Websites That Tell Stories.</p>
        </section>
    );
};

export default ProjectsSection;
