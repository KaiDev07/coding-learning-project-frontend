import { isAxiosError } from 'axios'
import api from '../../http/api'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type AxiosUserType = {
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

type UserPayload = {
    email: string
    password: string
}

type ParagraphPayload = {
    paragraphNum: number
    isRead: boolean
}

type TasksPayload = {
    topicNum: string
}

type Error = {
    error: string
}

export const checkAuth = createAsyncThunk<
    AxiosUserType,
    undefined,
    { rejectValue: Error }
>('user/checkAuth', async (_, { rejectWithValue }) => {
    try {
        const response = await api.get<AxiosUserType>('/user/refresh')
        return response.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data)
        }
        throw error
    }
})

export const login = createAsyncThunk<
    AxiosUserType,
    UserPayload,
    { rejectValue: Error }
>('user/login', async (data, { rejectWithValue }) => {
    try {
        const response = await api.post<AxiosUserType>('/user/login', data)
        return response.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data)
        }
        throw error
    }
})

export const logout = createAsyncThunk<
    undefined,
    undefined,
    { rejectValue: Error }
>('user/logout', async (_, { rejectWithValue }) => {
    try {
        await api.post('/user/logout')
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data)
        }
        throw error
    }
})

export const signup = createAsyncThunk<
    AxiosUserType,
    UserPayload,
    { rejectValue: Error }
>('user/signup', async (data, { rejectWithValue }) => {
    try {
        const response = await api.post<AxiosUserType>(
            '/user/registration',
            data
        )
        return response.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data)
        }
        throw error
    }
})

export const updateParagraph = createAsyncThunk<
    AxiosUserType,
    ParagraphPayload,
    { rejectValue: Error }
>('user/refreshParagraphs', async (data, { rejectWithValue }) => {
    try {
        const response = await api.post<AxiosUserType>(
            '/user/refreshParagraphs',
            data
        )
        return response.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data)
        }
        throw error
    }
})

export const updateTasks = createAsyncThunk<
    AxiosUserType,
    TasksPayload,
    { rejectValue: Error }
>('user/refreshDoneTasks', async (data, { rejectWithValue }) => {
    try {
        const response = await api.post<AxiosUserType>(
            '/user/refreshDoneTasks',
            data
        )
        return response.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data)
        }
        throw error
    }
})

type User = {
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

type InitialState = {
    loading: boolean
    user: User
    error: string
}

const initialState: InitialState = {
    loading: false,
    user: null,
    error: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        clearError: (state) => {
            state.error = ''
        },
    },
    extraReducers: (builder) => {
        builder.addCase(checkAuth.pending, (state) => {
            state.loading = true
        })
        builder.addCase(
            checkAuth.fulfilled,
            (state, action: PayloadAction<AxiosUserType>) => {
                state.loading = false
                state.user = action.payload.user
                state.error = ''
                if (action.payload.accessToken) {
                    localStorage.setItem('token', action.payload.accessToken)
                }
            }
        )
        builder.addCase(checkAuth.rejected, (state, action) => {
            state.loading = false
            if (action.payload) {
                state.error = action.payload.error
            } else {
                state.error = action.error.message || 'Something went wrong'
            }
        })
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(
            login.fulfilled,
            (state, action: PayloadAction<AxiosUserType>) => {
                state.loading = false
                state.user = action.payload.user
                state.error = ''
                if (action.payload.accessToken) {
                    localStorage.setItem('token', action.payload.accessToken)
                }
            }
        )
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            if (action.payload) {
                state.error = action.payload.error
            } else {
                state.error = action.error.message || 'Something went wrong'
            }
        })
        builder.addCase(logout.pending, (state) => {
            state.loading = true
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.loading = false
            state.user = null
            state.error = ''
            localStorage.removeItem('token')
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false
            if (action.payload) {
                state.error = action.payload.error
            } else {
                state.error = action.error.message || 'Something went wrong'
            }
        })
        builder.addCase(signup.pending, (state) => {
            state.loading = true
        })
        builder.addCase(
            signup.fulfilled,
            (state, action: PayloadAction<AxiosUserType>) => {
                state.loading = false
                state.user = action.payload.user
                state.error = ''
                if (action.payload.accessToken) {
                    localStorage.setItem('token', action.payload.accessToken)
                }
            }
        )
        builder.addCase(signup.rejected, (state, action) => {
            state.loading = false
            if (action.payload) {
                state.error = action.payload.error
            } else {
                state.error = action.error.message || 'Something went wrong'
            }
        })
        builder.addCase(updateParagraph.pending, (state) => {
            state.loading = true
        })
        builder.addCase(
            updateParagraph.fulfilled,
            (state, action: PayloadAction<AxiosUserType>) => {
                state.loading = false
                state.user = action.payload.user
                state.error = ''
            }
        )
        builder.addCase(updateParagraph.rejected, (state, action) => {
            state.loading = false
            if (action.payload) {
                state.error = action.payload.error
            } else {
                state.error = action.error.message || 'Something went wrong'
            }
        })
        builder.addCase(updateTasks.pending, (state) => {
            state.loading = true
        })
        builder.addCase(
            updateTasks.fulfilled,
            (state, action: PayloadAction<AxiosUserType>) => {
                state.loading = false
                state.user = action.payload.user
                state.error = ''
            }
        )
        builder.addCase(updateTasks.rejected, (state, action) => {
            state.loading = false
            if (action.payload) {
                state.error = action.payload.error
            } else {
                state.error = action.error.message || 'Something went wrong'
            }
        })
    },
})

export default userSlice.reducer
export const { clearError, setError } = userSlice.actions
