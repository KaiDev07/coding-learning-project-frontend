import { useState } from 'react'
import { isAxiosError } from 'axios'

import { useAuthContext } from './useAuthContext'
import api from '../http/api'
import { REDUCER_ACTION_TYPE } from '../context/AuthContext'

export type AxiosUserType = {
    user: {
        id: string
        isActivated: boolean
        email?: string
        name?: string
        paragraphsread: number[]
        par3: string
        par4: string
        par5: string
        par6: string
        par7: string
        par8: string
        par9: string
        par11: string
    }
    accessToken?: string
}

export const useCheckAuth = () => {
    const [isLoading4, setIsLoading4] = useState(false)
    const { dispatch } = useAuthContext()

    const checkAuth = async () => {
        try {
            setIsLoading4(true)
            const response = await api.get<AxiosUserType>('/user/refresh')
            console.log(response)
            setIsLoading4(false)
            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken)
            }
            dispatch({
                type: REDUCER_ACTION_TYPE.LOGIN,
                payload: response.data.user,
            })
        } catch (error) {
            setIsLoading4(false)
            if (isAxiosError(error)) {
                console.log(error.response?.data?.error)
            }
        }
    }

    return { isLoading4, checkAuth }
}
