import Header from './templates/header/Header'
import Footer from './templates/footer/Footer'
import BannerSection from './templates/main/BannerSection'
import AboutSection from './templates/main/AboutSection'

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