import { useLayoutEffect, useRef } from "react";
import { bannerGlowMove } from "../../hooks/gsapAnimations";
import BannerSection from "./BannerSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";

const Home = () => {
    const glowRef = useRef();

    useLayoutEffect(() => {
        if (!glowRef.current) return;

        const cleanup = bannerGlowMove(".op-bg-glow", 11, glowRef.current);
        return () => cleanup?.();
    }, []);
    return (
        <>
            {/* <div ref={glowRef} className="fixed top-0 left-0 w-full h-full backdrop-blur-[80px]">
                <div className="op-bg-glow fixed top-[10%] left-0 w-full h-full rounded-[50%]"></div>
            </div> */}
            <BannerSection></BannerSection>
            <AboutSection></AboutSection>
            <ProjectsSection></ProjectsSection>
        </>
    )
}

export default Home