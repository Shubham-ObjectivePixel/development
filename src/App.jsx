import Header from './components/layouts/Header'
import HomePage from './pages/Home/HomePage'
import Footer from './components/layouts/Footer'
import SmoothScroll from './hooks/Smoothscroll'

const App = () => {
    return (
        <>
            <Header></Header>
            <HomePage></HomePage>
            <Footer></Footer>
            <SmoothScroll></SmoothScroll>
        </>
    )
}

export default App