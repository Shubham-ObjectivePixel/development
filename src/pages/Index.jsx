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
                <CTASection />
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
};

export default HomePage