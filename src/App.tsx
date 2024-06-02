import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useCheckAuth } from './hooks/useCheckAuth'

import Home from './pages/Home'
import LearningPage from './pages/LearningPage'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
    const { user } = useAuthContext()
    const { checkAuth } = useCheckAuth()

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<LearningPage />} />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
