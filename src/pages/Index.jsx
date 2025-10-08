import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

import BannerSection from "../components/ui/BannerSection";
import ProjectsSection from "../components/ui/ProjectsSection";

const HomePage = () => {
    return (
        <>
            <Header />
            <main>

                <BannerSection />
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
};

export default HomePage