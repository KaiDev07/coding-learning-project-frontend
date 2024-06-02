import { useState } from 'react'
import { isAxiosError } from 'axios'

import { useAuthContext } from './useAuthContext'
import api from '../http/api'
import { REDUCER_ACTION_TYPE } from '../context/AuthContext'

export const useLogout = () => {
    const [isLoading3, setIsLoading3] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        try {
            setIsLoading3(true)
            const response = await api.post('/user/logout')
            console.log(response)
            setIsLoading3(false)
            localStorage.removeItem('token')
            dispatch({ type: REDUCER_ACTION_TYPE.LOGOUT })
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(error.response?.data?.error)
            }
        }
    }

    return { isLoading3, logout }
}
