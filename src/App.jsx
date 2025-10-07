import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/Index';
import AboutPage from './pages/About';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/work" element={<WorkPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>

        </>
    )
}

export default App