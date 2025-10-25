import { useEffect } from "react";

import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

const AboutPage = () => {
    useEffect(() => {
        document.title = "Objective Pixel - About";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Creating websites that inspire and connect. I turn your vision into a strong online presence.');
        }
    });
    return (
        <>
            <Header />
            <main className="pt-30">
                <div className="container md:px-15 px-4 mx-auto">
                    <h1 className="text-secondaryColor uppercase text-[clamp(60px,17vw,230px)] font-bold text-left leading-none">About</h1>
                    <div className="about-content">
                        <p className="text-secondaryColor md:pt-4 pt-0 lg:text-2xl text-xl leading-normal tagline-effect inline-block md:flex flex-wrap flex-col">Hi, I’m Shubham, the face behind Objective Pixel. What looks like a brand is really my one-man mission fueled by passion, creativity, and experience.</p>
                        <p className="text-secondaryColor md:pt-4 pt-0 lg:text-2xl text-xl leading-normal tagline-effect inline-block md:flex flex-wrap flex-col">
                            For over 7 years, I’ve helped businesses, entrepreneurs, and freelancers build their digital presence with WordPress design and development. I create websites that not only look great but also perform well. These sites tell stories, connect with people, and inspire trust.</p>
                        <p className="text-secondaryColor md:pt-4 pt-0 lg:text-2xl text-xl leading-normal tagline-effect inline-block md:flex flex-wrap flex-col">
                            As a tech enthusiast, I go beyond design and development. I solve problems, optimize for speed and SEO, ensure security, and introduce innovative ideas to help businesses grow online. My goal is to blend creativity with technology. This way, your website becomes a platform for your vision to thrive.</p>
                        <p className="text-secondaryColor md:pt-4 pt-0 lg:text-2xl text-xl leading-normal tagline-effect inline-block md:flex flex-wrap flex-col">
                            At Objective Pixel, it’s not about a team or a big agency. It’s about me working directly with you. I understand your needs and deliver a personalized solution. Every line of code, every pixel, and every idea comes from my desk, with full attention to detail.</p>

                        <p className="text-secondaryColor md:pt-4 pt-0 lg:text-2xl text-xl leading-normal tagline-effect inline-block md:flex flex-wrap flex-col">Objective Pixel is my way of helping you expand your online business vision.</p>

                        <p className="text-secondaryColor md:pt-4 pt-0 lg:text-2xl text-xl leading-normal tagline-effect inline-block md:flex flex-wrap flex-col">Let’s build something that reflects where you are today and inspires where you can go tomorrow.</p>
                        <a href="#" className={`inline-block rounded-full px-10 py-4 transition duration-700 transition-discrete font-bold leading-none uppercase border border-solid border-acentColor bg-acentColor text-primaryColor hover:scale-[1.05 hover:border-primaryColor hover:bg-transparent hover:text-primaryColor`}>Contact Me</a>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    );
};

export default AboutPage