import Navigation from "../../navigation/Navigation"

const BannerSection = () => {
    return (
        <>
            <section className="h-[90vh] flex justify-center items-center">
                <h1 className="text-white text-[72px] leading-[108px] font-extrabold text-center">I am here to <span className="text-op-green">bring</span><br />your <span className="text-op-green">vision</span> into life.</h1>
            </section>
            <Navigation></Navigation>
        </>
    )
}

export default BannerSection