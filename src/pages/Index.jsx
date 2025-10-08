import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

import BannerSection from "../components/ui/BannerSection";
import ProjectsSection from "../components/ui/ProjectsSection";

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                {/* <BannerSection /> */}
                <div className="h-screen"></div>
                <ProjectsSection />
                <div className="h-screen"></div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage