import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { useLogin } from '../hooks/useLogin'

import GoogleButton from 'react-google-button'

const Login = () => {
    const [email1, setEmail1] = useState('')
    const [password1, setPassword1] = useState('')
    const [email2, setEmail2] = useState('')
    const [password2, setPassword2] = useState('')
    const { isLoading1, error1, signup, setError1 } = useSignup()
    const { isLoading2, error2, login, setError2 } = useLogin()

    const handleSignup = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()

        await signup(email1, password1)
    }

    const handleLogin = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()

        await login(email2, password2)
    }

    function googleAuth() {
        return
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
                        <button onClick={handleSignup} disabled={isLoading1}>
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
                        <button onClick={handleLogin} disabled={isLoading2}>
                            Аккаунтке кіру
                        </button>
                        <p>Немесе</p>
                        <GoogleButton onClick={googleAuth} />
                    </form>
                </div>
            </div>

            <div className="section">
                <input
                    className="modal-btn"
                    type="checkbox"
                    id="modal-btn"
                    name="modal-btn"
                    checked={error1 ? true : false}
                    onChange={() => null}
                />
                <label
                    htmlFor="modal-btn"
                    style={{ maxHeight: '0px', maxWidth: '0px' }}
                    onClick={() => setError1('')}
                ></label>
                <div className="modal">
                    <div className="modal-wrap">
                        <p>{error1}</p>
                    </div>
                </div>
            </div>

            <div className="section">
                <input
                    className="modal-btn"
                    type="checkbox"
                    id="modal-btn"
                    name="modal-btn"
                    checked={error2 ? true : false}
                    onChange={() => null}
                />
                <label
                    htmlFor="modal-btn"
                    style={{ maxHeight: '0px', maxWidth: '0px' }}
                    onClick={() => setError2('')}
                ></label>
                <div className="modal">
                    <div className="modal-wrap">
                        <p>{error2}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
