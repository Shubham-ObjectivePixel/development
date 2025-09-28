<>
    <header className="p-4 fixed w-full top-0 backdrop-blur-[12px] z-20 fade-down">
        <div className="container">
            <div className="flex flex-wrap flex-row justify-between items-center">
                <Logo></Logo>
                <Tagline></Tagline>
                <Navigation></Navigation>
            </div>
        </div>
    </header>

    <footer className="bg-gray-500 font-display">
        Footer
    </footer>

    <div className="flex items-end justify-end w-[33%] mx-[auto]">
        <nav className="p-2 flex flex-row items-center rounded-full gap-4 bg-op-white-10">
            <ul className="flex flex-row items-center">
                {/* <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 bg-op-green text-op-darkBlue font-medium leading-none">Home</a></li> */}
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">About</a></li>
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Work</a></li>
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Contact</a></li>
            </ul>
            {/* <div className="toggler text-white">Open/Close</div> */}
        </nav>
    </div>

    <section id="op-banner-section" ref={el} className="relative backdrop-blur-[12px] min-h-screen px-8">
        <div className="h-screen flex items-center">
            <div className="container mx-auto flex flex-wrap h-full items-center relative">
                <div className="w-full md:w-1/2 h-full flex items-center justify-end relative">
                    <div className="heading-motion">
                        <h1 className="text-white text-[6.5vw] uppercase leading-[108px] text-right relative title-fade-effect">
                            I am here to <span className="text-op-green">bring</span> your <span className="text-op-green">vision</span> into life.
                            {/* Lorem ipsum dolor sit amet consectetur. */}
                        </h1>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex items-center justify-end absolute left-0 top-0 z-10">
                    <div className="heading-motion">
                        <h6 className="text-white text-stroke uppercase text-[6.5vw] leading-[108px] text-right relative title-fade-effect">
                            I am here to <span className="text-op-green">bring</span> your <span className="text-op-green">vision</span> into life.
                            {/* Lorem ipsum dolor sit amet consectetur. */}
                        </h6>
                    </div>
                </div>
                <div className="w-full md:w-[60%] h-full flex items-center justify-end absolute right-8">
                    <div className="bg-black w-full h-[70vh] rounded-xl imageAnimation">
                        <div className="w-full h-full">
                            <img src="../src/assets/images/demo.jpg" className="rounded-xl object-cover w-full h-full" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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