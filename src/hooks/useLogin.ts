import { useState } from 'react'
import { isAxiosError } from 'axios'

import { useAuthContext } from './useAuthContext'
import api from '../http/api'
import { REDUCER_ACTION_TYPE } from '../context/AuthContext'
import { type AxiosUserType } from './useCheckAuth'

export const useLogin = () => {
    const [isLoading2, setIsLoading2] = useState(false)
    const [error2, setError2] = useState<string | null>(null)
    const { dispatch } = useAuthContext()

    const login = async (email: string, password: string) => {
        try {
            setIsLoading2(true)
            setError2(null)

            const response = await api.post<AxiosUserType>('/user/login', {
                email,
                password,
            })
            console.log(response)

            setIsLoading2(false)

            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken)
            }

            dispatch({
                type: REDUCER_ACTION_TYPE.LOGIN,
                payload: response.data.user,
            })
        } catch (error) {
            setIsLoading2(false)
            if (isAxiosError(error)) {
                setError2(error.response?.data?.error)
                console.log(error.response?.data?.error)
            }
        }
    }

    return { isLoading2, error2, login }
}
