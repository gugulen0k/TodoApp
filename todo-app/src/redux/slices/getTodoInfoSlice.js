import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
    loading: false,
    error: null
}

export const getTodoInfoSlice = createSlice({
    name: "getTodoInfo",
    initialState,
    reducers: {
        triggerGetTodoInfo (state, action) {
            state.loading = true
        },
        successGetTodoInfo (state, action) {
            state.data = { ...action.payload }
            state.loading = false
        },
        failureGetTodoInfo (state, action) {
            state.error = action.payload
            state.loading = false
        },
        resetTodoInfo (state, action) {
            state.data = {}
            state.error = null
            state.loading = false
        }
    }
})

export const { triggerGetTodoInfo, successGetTodoInfo, failureGetTodoInfo, resetTodoInfo } = getTodoInfoSlice.actions
export default getTodoInfoSlice.reducer