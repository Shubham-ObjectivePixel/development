import Button from "../../components/ui/Button"
import Movingdots from "../../components/ui/Movingdots"

const AboutSection = () => {
    return (
        <>
            <section className="about-section bg-black relative">
                <div className="container px-30">
                    <div className="flex flex-wrap content-center">
                        <div className="w-[50%]">
                            <h2 className="text-op-green text-[]">Design your dream website.</h2>
                        </div>
                        <div className="w-[50%]">
                            <h2 className="text-white text-4xl leading-[1.5]">Objective Pixel is a creative web design studio that transforms ideas into modern, user-focused websites.</h2>
                            <div className="mt-10 text-xl text-white">
                                <p className="mb-4">From concept to launch, every project is crafted with detail, clarity, and purpose; ensuring a seamless experience for both you and your audience.</p>
                                <p className="mb-4">With over 7 years of expertise in WordPress design and development, I create websites that are not only visually striking but also fast, secure, and performance-driven.</p>
                            </div>
                            <div className="mt-10">
                                <Button link="#" text="Contact Now!"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection