import Navigation from "../../navigation/Navigation"

const BannerSection = () => {
    return (
        <>
            <section className="h-[90vh] flex justify-center items-center">
                <h1 className="text-white text-6xl text-center bold">I’m here to <span className="op-text-heighlight">bring</span><br />your <span className="op-text-heighlight">vision</span> to life.</h1>
            </section> 
            <Navigation></Navigation>
        </>
    )
}

export default BannerSection