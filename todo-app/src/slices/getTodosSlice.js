import { createSlice } from '@reduxjs/toolkit'

const initial = {
    data: [],
    error: null,
    loading: false
}

export const getTodosSlice = createSlice({
    name: 'getTodos',
    initialState: initial,
    reducers: {
        triggerGetTodos: (state, action) => {
            state.loading = true
        },
        successGetTodos: (state, action) => {
            state.loading = false
            state.data = [...state.data, ...action.payload]
        },
        failureGetTodos: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { triggerGetTodos, successGetTodos, failureGetTodos } = getTodosSlice.actions

export default getTodosSlice.reducer