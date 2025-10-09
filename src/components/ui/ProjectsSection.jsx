import { useEffect, useRef } from "react";
import { useHeaderContext } from "../context/HeaderContext";

const ProjectsSection = () => {
    const { setActiveSection } = useHeaderContext();
    const sectionRef = useRef(null);
    const sectionId = "projects";

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                    setActiveSection(sectionId);
                }

                else if (entry.isIntersecting && entry.boundingClientRect.top <= 100) {
                    setActiveSection(sectionId);
                }

                else if (!entry.isIntersecting && entry.boundingClientRect.bottom <= 0 || entry.boundingClientRect.top >= 0) {
                    setActiveSection(null);
                }
            },
            {
                rootMargin: "0px 0px -100% 0px",
                threshold: [0, 1],
            }
        );

        if (section) observer.observe(section);
        return () => {
            if (section) observer.unobserve(section);
        };
    }, [setActiveSection, sectionId]);

    return (
        <section ref={sectionRef} id={sectionId} data-bg-type="white" className="h-[200vh] relative z-10 rounded-xl bg-white">
            <h2 className="section-title-effect uppercase text-[10vw] text-center leading-normal"> Work </h2>
            <div className="relative z-10 pt-[8.5vw]">
                <div className="flex justify-between gap-3">

                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
