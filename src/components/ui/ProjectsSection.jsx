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
            <div className="flex flex-wrap gap-30 flex-col mt-50">
                <a href="#" className="flex flex-wrap flex-row justify-between items-end bg-primaryColor">
                    <div className="w-2/5 p-4 text-white">data</div>
                    <div className="w-3/5"><img src="https://cdn.pixabay.com/photo/2025/10/04/18/08/chameleon-9873577_1280.jpg" /></div>
                </a>
                <a href="#" className="flex flex-wrap flex-row justify-between items-end bg-primaryColor">
                    <div className="w-3/5"><img src="https://cdn.pixabay.com/photo/2025/10/04/18/08/chameleon-9873577_1280.jpg" /></div>
                    <div className="w-2/5 p-4 text-white">data</div>
                </a>
                <a href="#" className="flex flex-wrap flex-row justify-between items-end bg-primaryColor">
                    <div className="w-2/5 p-4 text-white">data</div>
                    <div className="w-3/5"><img src="https://cdn.pixabay.com/photo/2025/10/04/18/08/chameleon-9873577_1280.jpg" /></div>
                </a>
                <a href="#" className="flex flex-wrap flex-row justify-between items-end bg-primaryColor">
                    <div className="w-3/5"><img src="https://cdn.pixabay.com/photo/2025/10/04/18/08/chameleon-9873577_1280.jpg" /></div>
                    <div className="w-2/5 p-4 text-white">data</div>
                </a>
            </div>

        </section>
    );
};

export default ProjectsSection;
