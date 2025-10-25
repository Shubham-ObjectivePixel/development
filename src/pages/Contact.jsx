import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

const ContactPage = () => {
    return (
        <>
            <Header />
            <main className="pt-30">
                <div className="container md:px-15 px-4 mx-auto">
                    <h1 className="text-secondaryColor uppercase text-[clamp(60px,17vw,230px)] font-bold text-left leading-none">Let's Talk</h1>
                    <div className="contact-content">

                    </div>
                </div>
            </main >
            <Footer />
        </>
    );
};

export default ContactPage