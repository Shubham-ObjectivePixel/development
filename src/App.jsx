import Header from './templates/header/Header'
import Footer from './templates/footer/Footer'
import AboutSection from './templates/main/home/AboutSection'
import BannerSection from './templates/main/home/BannerSection'

const App = () => {
    return (
        <>
            <Header></Header>
            <BannerSection></BannerSection>
            <AboutSection></AboutSection>
            <Footer></Footer>
        </>
    )
}

export default App