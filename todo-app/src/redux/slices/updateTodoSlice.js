import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
    loading: false,
    error: null
}

export const updateTodoSlice = createSlice({
    name: "updateTodo",
    initialState,
    reducers: {
        triggerUpdateTodoInfo (state, action) {
            state.loading = true
        },
        successUpdateTodoInfo (state, action) {
            state.data = { ...action.payload }
            state.loading = false
        },
        failureUpdateTodoInfo (state, action) {
            state.error = action.payload
            state.loading = false
        }
    }
})

export const { triggerUpdateTodoInfo, successUpdateTodoInfo, failureUpdateTodoInfo } = updateTodoSlice.actions
export default updateTodoSlice.reducer