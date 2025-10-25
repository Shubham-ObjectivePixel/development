import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

import BannerSection from "../components/ui/BannerSection";
import ProjectsSection from "../components/ui/ProjectsSection";
import CTASection from "../components/ui/CTASection";
import HowCanIHelp from "../components/ui/HowCanIHelp"

const HomePage = () => {
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
                    fontSize="9vw"
                />
                <div className="h-[15vh]"></div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage