import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

import BannerSection from "../components/ui/BannerSection";
import ProjectsSection from "../components/ui/ProjectsSection";
import GlowingLight from "../components/ui/GlowingLight";

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <BannerSection />
                <ProjectsSection />
                <GlowingLight />
            </main>
            <Footer />
        </>
    );
};

export default HomePage