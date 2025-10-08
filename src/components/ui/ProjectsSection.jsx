import { useEffect, useRef } from "react";
import { useHeaderContext } from "../context/HeaderContext";

const ProjectsSection = () => {
    const { setActiveSection } = useHeaderContext();
    const sectionRef = useRef(null);
    const sectionId = "projects"; // Unique ID for this section

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Add class when the top of the section touches the top of the viewport
                if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                    setActiveSection(sectionId); // Set the active section when the top is at the top
                } 
                // Remove class when the bottom of the section touches the top of the viewport
                else if (!entry.isIntersecting && entry.boundingClientRect.bottom <= 0) {
                    setActiveSection(null); // Remove the active section when the bottom is at the top
                }
            },
            {
                rootMargin: "0px 0px -100% 0px", // When the bottom of the section touches the viewport top
                threshold: [0, 1], // Trigger at both 0% and 100% visibility
            }
        );

        if (section) observer.observe(section);
        return () => {
            if (section) observer.unobserve(section);
        };
    }, [setActiveSection, sectionId]);

    return (
        <section
            ref={sectionRef}
            id={sectionId}  // Unique ID for this section
            data-bg-type="white"
            className="h-[200vh] relative z-10 rounded-xl bg-black"
        >
            <h2 className="section-title-effect uppercase text-[10vw] text-center leading-normal">
                Work
            </h2>
            <div className="relative z-10 pt-[8.5vw]">
                <div className="flex justify-between gap-3">
                    {/* Cards component */}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
