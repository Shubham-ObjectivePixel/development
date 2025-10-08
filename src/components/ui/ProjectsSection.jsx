import { useEffect, useRef } from "react";
import Cards from "../ui/Cards";
import { useHeaderContext } from "../context/HeaderContext";

const ProjectsSection = () => {
    const { setIsWhite } = useHeaderContext();
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Trigger when this section is in view
                    setIsWhite(true);
                } else {
                    setIsWhite(false);
                }
            },
            {
                threshold: 0.5, // Adjust visibility % as needed
            }
        );

        if (section) observer.observe(section);
        return () => {
            if (section) observer.unobserve(section);
        };
    }, [setIsWhite]);

    return (
        <section
            ref={sectionRef}
            data-bg-type="white"
            className="h-[200vh] relative z-10 rounded-xl bg-black"
        >
            <h2 className="section-title-effect uppercase text-[10vw] text-center leading-normal">
                Work
            </h2>
            <div className="relative z-10 pt-[8.5vw]">
                <div className="flex justify-between gap-3">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
