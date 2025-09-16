import Header from './components/layouts/Header'
import Home from './pages/Home/Home'
import Footer from './components/layouts/Footer'
import SmoothScroll from './hooks/Smoothscroll'

const App = () => {
    return (
        <>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
            <SmoothScroll></SmoothScroll>
        </>
    )
}

export default App