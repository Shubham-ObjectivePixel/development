import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

import BannerSection from "../components/ui/BannerSection";
import ProjectsSection from "../components/ui/ProjectsSection";
import CTASection from "../components/ui/CTASection";

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
                <CTASection
                    CTAText="Grow Online"
                    CTAButtonText="Contact Me"
                    CTAbuttonLink="/contact"
                    setBG="No"
                    fontSize="13vw"
                />
                <h2 className="section__title--entrance text-secondaryColor uppercase text-[15vw] font-bold text-left leading-none ">Website Matters</h2>
            </main>
            <Footer />
        </>
    );
};

export default HomePage