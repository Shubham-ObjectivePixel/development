import Button from "../../components/ui/Button"

const AboutSection = () => {
    return (
        <>
            <section className="about-section backdrop-blur-[12px] h-[300vh] relative py-[8vw]">
                <div className="container px-30">
                    <div className="flex flex-wrap content-center justify-between items-start">
                        <div className="w-[45%]">
                            <h2 className="text-white text-[120px] leading-[1] font-bold uppercase">Design your <span className="text-op-green">Dream</span> website<span className="text-op-green">.</span></h2>
                        </div>
                        <div className="w-[45%]">
                            <div className="text-xl text-white leading-[1.5] pt-[20vw]">
                                <p className="mb-4">Objective Pixel helps you think bigger about what’s possible for your business online.</p>
                                <p className="mb-4">A powerful website doesn’t just show where you are today; it inspires where you’re going. It gives you the space to grow, connect, and build trust with your audience.</p>
                                <p className="mb-4">I work closely with you to understand your brand’s story, create a unique digital experience, and deliver a website people remember and love.</p>
                                <p className="mb-4">With over 7 years of expertise in WordPress design, development, and website strategy, Objective Pixel bridges creativity and technology to help businesses, freelancers, and entrepreneurs thrive in the digital world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[10vw] flex flex-wrap content-center justify-center items-center">
                        <h3 className="text-white text-[120px] leading-[1] font-bold text-center uppercase">Build a Stronger Online Presence<span className="text-op-green">.</span></h3>
                        <div className="mt-20">
                            <Button link="#" text="Start Your Project"></Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection