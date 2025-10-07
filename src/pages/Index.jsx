import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

import GlowingLight from "../components/ui/GlowingLight";
import BannerSection from "../components/ui/BannerSection";
import ProjectsSection from "../components/ui/ProjectsSection";

const HomePage = () => {
    return (
        <>
            {/* <Header /> */}
            <main>
                {/* <GlowingLight /> */}
                {/* <BannerSection /> */}
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
};

export default HomePage