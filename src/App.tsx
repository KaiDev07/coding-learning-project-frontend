import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { checkAuth } from './features/user/userSlice'

import Home from './pages/Home'
import LearningPage from './pages/LearningPage'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorModal from './components/ErrorModal'

function App() {
    const user = useAppSelector((state) => state.user.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(checkAuth())
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
            <ErrorModal />
        </BrowserRouter>
    )
}

export default App
