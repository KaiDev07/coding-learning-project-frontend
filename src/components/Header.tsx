import { Link, useNavigate } from 'react-router-dom'

import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Header = () => {
    const navigate = useNavigate()
    const { user } = useAuthContext()

    const { isLoading3, logout } = useLogout()

    const handleLogout = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()

        logout()
    }

    return (
        <header>
            <div className="header-flex">
                <p>
                    <Link to="/">NursalimEdu</Link>
                </p>
                <button
                    onClick={user ? handleLogout : () => navigate('/login')}
                >
                    {user ? 'Шығу' : 'Кіру'}
                </button>
            </div>
        </header>
    )
}

export default Header
