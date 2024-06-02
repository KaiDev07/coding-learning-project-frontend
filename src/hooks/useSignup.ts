import { useState } from 'react'
import { isAxiosError } from 'axios'

import { useAuthContext } from './useAuthContext'
import api from '../http/api'
import { REDUCER_ACTION_TYPE } from '../context/AuthContext'
import { type AxiosUserType } from './useCheckAuth'

export const useSignup = () => {
    const [isLoading1, setIsLoading1] = useState(false)
    const [error1, setError1] = useState<string | null>(null)
    const { dispatch } = useAuthContext()

    const signup = async (email: string, password: string) => {
        try {
            setIsLoading1(true)
            setError1(null)

            const response = await api.post<AxiosUserType>(
                '/user/registration',
                {
                    email,
                    password,
                }
            )
            console.log(response)

            setIsLoading1(false)

            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken)
            }

            dispatch({
                type: REDUCER_ACTION_TYPE.LOGIN,
                payload: response.data.user,
            })
        } catch (error) {
            setIsLoading1(false)
            if (isAxiosError(error)) {
                setError1(error.response?.data?.error)
                console.log(error.response?.data?.error)
            }
        }
    }

    return { isLoading1, error1, signup }
}
