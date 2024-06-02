import { createContext, useReducer, ReactElement } from 'react'

type UserType = {
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
} | null

type StateType = {
    user: UserType
}

const initState: StateType = {
    user: null,
}

export type AuthContextType = {
    user: UserType
    dispatch: React.Dispatch<ReducerAction>
}

const initContextState: AuthContextType = {
    user: null,
    dispatch: () => null,
}

export const AuthContext = createContext<AuthContextType>(initContextState)

export const enum REDUCER_ACTION_TYPE {
    LOGIN,
    LOGOUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE
    payload?: UserType
}

export const authReducer = (
    state: StateType,
    action: ReducerAction
): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.LOGIN:
            if (typeof action.payload === 'undefined') {
                return state
            }
            return { user: action.payload }
        case REDUCER_ACTION_TYPE.LOGOUT:
            return { user: null }
        default:
            return state
    }
}

type ChildrenType = {
    children: ReactElement | ReactElement[] | undefined
}
export const AuthContextProvider = ({
    children,
}: ChildrenType): ReactElement => {
    const [state, dispatch] = useReducer(authReducer, initState)

    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
