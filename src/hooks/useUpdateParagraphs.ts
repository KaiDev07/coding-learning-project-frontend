import { useState } from 'react'
import { isAxiosError } from 'axios'

import { useAuthContext } from './useAuthContext'
import api from '../http/api'
import { REDUCER_ACTION_TYPE } from '../context/AuthContext'
import { type AxiosUserType } from './useCheckAuth'

export const useUpdateParagraph = () => {
    const [isLoading5, setIsLoading5] = useState(false)
    const { dispatch } = useAuthContext()

    const updateParagraph = async (paragraphNum: number, isRead: boolean) => {
        try {
            setIsLoading5(true)

            const response = await api.post<AxiosUserType>(
                '/user/refreshParagraphs',
                {
                    paragraphNum,
                    isRead,
                }
            )
            console.log(response)

            setIsLoading5(false)

            dispatch({
                type: REDUCER_ACTION_TYPE.LOGIN,
                payload: response.data.user,
            })
        } catch (error) {
            setIsLoading5(false)
            if (isAxiosError(error)) {
                console.log(error.response?.data?.error)
            }
        }
    }

    return { isLoading5, updateParagraph }
}
