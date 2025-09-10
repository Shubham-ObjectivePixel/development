import Header from './layouts/Header'
import BannerSection from './pages/Home/BannerSection'
import AboutSection from './pages/Home/AboutSection'
import Mousescroll from './components/Mousescroll'
import Footer from './layouts/Footer'

const App = () => {
    return (
        <>
            <Header></Header>
            <BannerSection></BannerSection>
            <AboutSection></AboutSection>
            <Footer></Footer>
            <Mousescroll></Mousescroll>
        </>
    )
}

export default App