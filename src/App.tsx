import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LearningPages from './pages/LearningPages'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <BrowserRouter>
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
