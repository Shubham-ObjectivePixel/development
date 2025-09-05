import Header from './templates/header/Header'
import Footer from './templates/footer/Footer'
import AboutSection from './templates/main/home/AboutSection'
import BannerSection from './templates/main/home/BannerSection'
import SmoothScroll from './Components/Smoothscroll'

const App = () => {
    return (
        <>
            <SmoothScroll></SmoothScroll>
            <Header></Header>
            <BannerSection></BannerSection>
            <AboutSection></AboutSection>
            <Footer></Footer>
        </>
    )
}

export default App