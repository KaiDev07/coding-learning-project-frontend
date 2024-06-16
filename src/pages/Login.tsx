import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { signup, login } from '../features/user/userSlice'

import GoogleButton from 'react-google-button'

const Login = () => {
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const [email1, setEmail1] = useState('')
    const [password1, setPassword1] = useState('')
    const [email2, setEmail2] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSignup = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()

        dispatch(signup({ email: email1, password: password1 }))
    }

    const handleLogin = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()

        dispatch(login({ email: email2, password: password2 }))
    }

    function googleAuth() {
        window.open(`${import.meta.env.VITE_API_URL}/user/auth/google`, '_self')
    }

    return (
        <main>
            <div className="login-main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup-container">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Регистрация
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email1}
                            onChange={(e) => setEmail1(e.target.value)}
                        />
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                        />
                        <button onClick={handleSignup} disabled={user.loading}>
                            Аккаунт құру
                        </button>
                        <p>Немесе</p>
                        <GoogleButton onClick={googleAuth} />
                    </form>
                </div>

                <div className="login-container">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Кіру
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email2}
                            onChange={(e) => setEmail2(e.target.value)}
                        />
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                        <button onClick={handleLogin} disabled={user.loading}>
                            Аккаунтке кіру
                        </button>
                        <p>Немесе</p>
                        <GoogleButton onClick={googleAuth} />
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login
