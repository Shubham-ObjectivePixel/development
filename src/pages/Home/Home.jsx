import { useLayoutEffect, useRef } from "react";
import { bannerGlowMove } from "../../hooks/gsapAnimations";
import BannerSection from "./BannerSection"
import ProjectsSection from "./ProjectsSection"
import AboutSection from "./AboutSection"

const Home = () => {
    const glowRef = useRef();

    useLayoutEffect(() => {
        if (!glowRef.current) return;

        const cleanup = bannerGlowMove(".op-bg-glow", 6, glowRef.current);
        return () => cleanup?.();
    }, []);
    return (
        <>
            <div ref={glowRef}>
                <div className="op-bg-glow"></div>
            </div>
            <BannerSection></BannerSection>
            <AboutSection></AboutSection>
            <ProjectsSection></ProjectsSection>
        </>
    )
}

export default Home