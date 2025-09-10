import Navigation from "../../layouts/Navigation"

const BannerSection = () => {
    return (
        <>
            <section id="op-banner-section" className="relative">
                <div className="bg-op-darkBlue h-[150vh]">
                    <div className="op-bg-glow"></div>
                </div>
                <div className="h-[100vh] absolute top-0 left-0 w-full">
                    <div className="container h-full">
                        <div className="w-1/2 h-full flex items-center justify-end">
                            <h1 className="text-white text-[72px] leading-[108px] font-extrabold text-right">I am here to <span className="text-op-green">bring</span><br />your <span className="text-op-green">vision</span> into life.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <Navigation></Navigation>
        </>
    )
}

export default BannerSection