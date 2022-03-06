import { all, takeEvery } from "redux-saga/effects"
import { triggerGetTodoInfo } from "../slices/getTodoInfoSlice"
import { triggerAddTodo, triggerRemoveTodo, triggerTodos } from "../slices/getTodosSlice"
import { workAddTodo } from "./handlers/addTodoHandler"
import { workGetTodos } from "./handlers/getTodosHandler"
import { workRemoveTodo } from "./handlers/removeTodoHandler"
import { workGetTodoInfo } from './handlers/getTodoInfoHandler'

function* todoSaga() {
    yield all([
        takeEvery(triggerTodos, workGetTodos),
        takeEvery(triggerAddTodo, workAddTodo),
        takeEvery(triggerRemoveTodo, workRemoveTodo),
        takeEvery(triggerGetTodoInfo, workGetTodoInfo)
    ])
}

export default todoSaga