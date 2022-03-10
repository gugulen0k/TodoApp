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
        triggerTodos: ( state ) => {
            state.loading = true
        },
        successGetTodos: (state, action) => {
            state.loading = false
            state.data = [ ...action.payload ]
        },
        failureGetTodos: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        triggerAddTodo: (state, action) => {
            state.loading = true
        },
        successAddTodo: (state, action) => {
            state.loading = false
            state.data = [ ...action.payload, ...state.data ]
        },
        failureAddTodo: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        triggerRemoveTodo: (state, action) => {
            state.loading = true
        },
        successRemoveTodo: (state, action) => {
            state.loading = false
            state.data = state.data.filter(todo => todo.id !== action.payload)
        },
        failureRemoveTodo: (state, action) => {
            state.loading = false
            state.data = action.payload
        }
    }
})

export const { triggerTodos,
               triggerAddTodo,
               triggerRemoveTodo,
               successGetTodos,
               successAddTodo,
               successRemoveTodo,
               failureGetTodos,
               failureAddTodo,
               failureRemoveTodo } = getTodosSlice.actions

export default getTodosSlice.reducer