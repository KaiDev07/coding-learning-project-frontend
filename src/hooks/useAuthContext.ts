import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { type AuthContextType } from '../context/AuthContext'

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext)

    return context
}
