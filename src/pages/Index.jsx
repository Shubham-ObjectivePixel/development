import { useEffect } from "react";

import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

import BannerSection from "../components/sections/BannerSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import CTASection from "../components/sections/CTASection";
import HowCanIHelp from "../components/sections/HowCanIHelp"

const HomePage = () => {
    useEffect(() => {
        document.title = "Objective Pixel - Creative Web Solutions";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Creating websites that inspire and connect. I turn your vision into a strong online presence.');
        }
    });
    return (
        <>
            <Header />
            <main>
                <BannerSection />
                <CTASection
                    CTAText="No magic formula just Consistent effort."
                    CTAButtonText="About Me"
                    CTAbuttonLink="/about"
                    setBG="Yes"
                    fontSize="6vw"
                />
                <ProjectsSection />
                <div className="h-[80vh]"></div>
                <HowCanIHelp />
                <CTASection
                    CTAText="Let’s build something meaningful together."
                    CTAButtonText="Let’s Talk"
                    CTAbuttonLink="/contact"
                    setBG="No"
                    fontSize="8vw"
                />
                <div className="md:h-[15vh] h-[10vh]"></div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage