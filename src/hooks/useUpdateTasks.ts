import { useState } from 'react'
import { isAxiosError } from 'axios'

import { useAuthContext } from './useAuthContext'
import api from '../http/api'
import { REDUCER_ACTION_TYPE } from '../context/AuthContext'
import { type AxiosUserType } from './useCheckAuth'

export const useUpdateTasks = () => {
    const [isLoading6, setIsLoading6] = useState(false)
    const { dispatch } = useAuthContext()

    const updateTasks = async (topicNum: string) => {
        try {
            setIsLoading6(true)

            const response = await api.post<AxiosUserType>(
                '/user/refreshDoneTasks',
                {
                    topicNum,
                }
            )
            console.log(response)

            setIsLoading6(false)

            dispatch({
                type: REDUCER_ACTION_TYPE.LOGIN,
                payload: response.data.user,
            })
        } catch (error) {
            setIsLoading6(false)
            if (isAxiosError(error)) {
                console.log(error.response?.data?.error)
            }
        }
    }

    return { isLoading6, updateTasks }
}
