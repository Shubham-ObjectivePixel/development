import Header from './Templates/Header/Header'
import Footer from './Templates/Footer/Footer'
import BannerSection from './Templates/Main/Home/BannerSection'
import AboutSection from './Templates/Main/Home/AboutSection'

const App = () => {
    return (
        <>
            <Header></Header>
            <main>
                <BannerSection></BannerSection>
                <AboutSection></AboutSection>
            </main>
            <Footer></Footer>
        </>
    )
}

export default App