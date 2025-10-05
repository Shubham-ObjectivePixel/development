<>


    <footer className="bg-gray-500 font-display">
        Footer
    </footer>

    {/* <nav className="p-2 flex flex-row items-center rounded-full gap-4 bg-op-white-10 relative z-10">
                        <ul className="flex flex-row items-center">
                            <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">About</a></li>
                            <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Work</a></li>
                            <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Contact</a></li>
                        </ul>
                    </nav> */}



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




    import {TbGridDots} from "react-icons/tb";
    import {useRef} from "react";
    import {navigationAnimation} from "../../hooks/gsapAnimations";

const Navigation = () => {
    const el = useRef();
    const animationCleanup = useRef(null);  // Store cleanup function here

    const handleMouseOver = (e) => {
        const target = e.currentTarget;

    // If there's an existing animation, clean it up first
    if (animationCleanup.current) {
        animationCleanup.current();
        }

    // Run animation and store cleanup function
    animationCleanup.current = navigationAnimation(target);
    };

    const handleMouseLeave = () => {
        // Call cleanup to revert animation when mouse leaves
        if (animationCleanup.current) {
        animationCleanup.current();
    animationCleanup.current = null;
        }
    };

    return (
    <div ref={el} className="w-[33%] flex flex-wrap justify-end relative">
        <div
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="w-[60%] text-white border-b border-op-white-25 py-3 px-4 navigation-section cursor-pointer"
        >
            <div className="flex flex-wrap justify-between items-center">
                <span className="uppercase text-sm tracking-widest">Vision</span>
                <TbGridDots className="w-[25px] h-[25px]" />
            </div>
        </div>

        <div className="navigation-wrapper">
            <div className="bg-white w-[80px] h-[80px] rounded-[50%] fixed right-0 top-0 navigation-animation"></div>

            <nav className="p-2 flex flex-row items-center rounded-full gap-4 bg-op-white-10 relative z-10">
                <ul className="flex flex-row items-center">
                    <li className="op-nav-item">
                        <a
                            href=""
                            className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none"
                        >
                            About
                        </a>
                    </li>
                    <li className="op-nav-item">
                        <a
                            href=""
                            className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none"
                        >
                            Work
                        </a>
                    </li>
                    <li className="op-nav-item">
                        <a
                            href=""
                            className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    );
};

    export default Navigation;


</>