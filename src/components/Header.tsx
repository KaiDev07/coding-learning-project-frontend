import { Link, useNavigate } from 'react-router-dom'

import { logout } from '../features/user/userSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks'

const Header = () => {
    const navigate = useNavigate()
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    const handleLogout = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()

        dispatch(logout())
    }

    return (
        <header>
            <div className="header-flex">
                <p>
                    <Link to="/">NursalimEdu</Link>
                </p>
                <button
                    onClick={
                        user.user ? handleLogout : () => navigate('/login')
                    }
                    disabled={user.loading}
                >
                    {user ? 'Шығу' : 'Кіру'}
                </button>
            </div>
        </header>
    )
}

export default Header
