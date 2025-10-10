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
                <section className="xl:px-24 lg:px-20 md:px-16 px-8 py-24 bg-white relative rounded-xl m-8 op-sec-scale-zoom scale-[1] origin-top">
                    <div className="flex flex-wrap items-center justify-center md:gap-16 gap-8">
                        <h2 className="text-op-darkBlue text-[8vw] text-center leading-[normal]">No magic formula just Consistent effort.</h2>
                        <a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete bg-op-gradient text-black font-medium leading-none">About Me</a>
                    </div>
                </section>
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
};

export default HomePage