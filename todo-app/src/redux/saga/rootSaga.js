import { all, takeEvery } from "redux-saga/effects"
import { triggerGetTodoInfo } from "../slices/getTodoInfoSlice"
import { triggerAddTodo, triggerRemoveTodo, triggerTodos } from "../slices/getTodosSlice"
import { workAddTodo } from "./handlers/addTodoHandler"
import { workGetTodos } from "./handlers/getTodosHandler"
import { workRemoveTodo } from "./handlers/removeTodoHandler"
import { workGetTodoInfo } from './handlers/getTodoInfoHandler'
import { triggerUpdateTodoInfo } from "../slices/updateTodoSlice"
import { workUpdateTodo } from "./handlers/updateTodoHandler"

function* todoSaga() {
    yield all([
        takeEvery(triggerTodos, workGetTodos),
        takeEvery(triggerAddTodo, workAddTodo),
        takeEvery(triggerRemoveTodo, workRemoveTodo),
        takeEvery(triggerGetTodoInfo, workGetTodoInfo),
        takeEvery(triggerUpdateTodoInfo, workUpdateTodo)
    ])
}

export default todoSaga