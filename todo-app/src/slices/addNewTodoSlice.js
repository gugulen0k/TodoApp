import { createSlice } from "@reduxjs/toolkit";

const initial = {
    data: {},
    error: null
}

export const addNewTodoSlice = createSlice({
    name: "addNewTodo",
    initialState: initial,
    reducers: {
        triggerAddNewTodo(state, action) {
            
        }
    }
})