import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LearningPages from './pages/LearningPages'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<LearningPages />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
