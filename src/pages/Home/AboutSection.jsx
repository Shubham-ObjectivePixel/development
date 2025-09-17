import Movingdots from "../../components/ui/Movingdots"

const AboutSection = () => {
    return (
        <>
            <section className="about-section h-[120vh] bg-op-darkBlue relative">
                <div className="container h-[100vh]">
                    <div className="flex flex-wrap h-[100vh] content-center">
                        <h6 className="mb-[50px]">About</h6>
                        <h2 className="pl-[80px]">Objective Pixel is a creative studio dedicated to crafting modern, user-focused websites. From design to development, every project is approached with detail, clarity, and purpose. Developed by Shubham Soni.</h2>
                    </div>
                </div>
                <Movingdots></Movingdots>
            </section>
        </>
    )
}

export default AboutSection