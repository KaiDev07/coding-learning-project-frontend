import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="header-flex">
                <p>
                    <Link to="/">NursalimEdu</Link>
                </p>
                <button>Кіру</button>
            </div>
        </header>
    )
}

export default Header
