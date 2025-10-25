import { useLayoutEffect, useRef } from "react";
import { pageHeadingAnimation, projectStackAnimation } from '../../hooks/gsapAnimations';

const ProjectsSection = () => {

    const el = useRef();
    const elProject = useRef();

    useLayoutEffect(() => {
        if (!el.current && !elProject.current) return;
        const ctx = el.current;
        const ctx2 = elProject.current;
        const cleanup1 = projectStackAnimation(".card-1", ".card-2", ".card-3", ".card-4", elProject.current, elProject.current);
        const cleanup2 = pageHeadingAnimation(".section__title--entrance", el.current, 1.5, el.current);
        return () => {
            cleanup1?.();
            cleanup2?.();
        };
    }, []);

    return (
        <section ref={el} className="relative z-10 xl:px-24 lg:px-20 md:px-16 px-8 xl:py-40 lg:py-20 md:py-16 py-8 section">
            <h2 className="section__title--entrance text-secondaryColor uppercase md:text-[15vw] text-[21vw] font-bold text-left leading-none ">Work</h2>
            <p className="lg:text-2xl text-xl text-white text-right mt-8">Each project blends storytelling, performance, and purpose. <br />See some of my favorites below.</p>
            <div ref={elProject} className="flex flex-wrap gap-20 flex-col mt-50 relative">
                <a href="#" className="custom-card card-1 w-full flex flex-wrap justify-center view-project shadow-xl">
                    <img src="https://cdn.pixabay.com/photo/2025/10/04/18/08/chameleon-9873577_1280.jpg" className="rounded-xl w-full h-full max-h-[80vh] min-h-[80vh] object-cover object-center" />
                </a>
                <a href="#" className="custom-card card-2 w-full flex flex-wrap justify-center view-project shadow-xl">
                    <img src="https://cdn.pixabay.com/photo/2025/10/04/10/40/visual-poetry-9872761_1280.jpg" className="rounded-xl w-full h-full max-h-[80vh] min-h-[80vh] object-cover object-center" />
                </a>
                <a href="#" className="custom-card card-3 w-full flex flex-wrap justify-center view-project shadow-xl">
                    <img src="https://cdn.pixabay.com/photo/2025/10/08/17/05/nature-9881953_1280.jpg" className="rounded-xl w-full h-full max-h-[80vh] min-h-[80vh] object-cover object-center" />
                </a>
                <a href="#" className="custom-card card-4 w-full flex flex-wrap justify-center view-project shadow-xl">
                    <img src="https://cdn.pixabay.com/photo/2025/10/09/08/14/mushroom-9883036_1280.jpg" className="rounded-xl w-full h-full max-h-[80vh] min-h-[80vh] object-cover object-center" />
                </a>
            </div>
        </section >
    );
};

export default ProjectsSection;
