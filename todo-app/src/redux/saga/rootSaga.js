import { all, takeEvery } from "redux-saga/effects"
import { triggerAddTodo, triggerRemoveTodo, triggerTodos } from "../slices/getTodosSlice"
import { workAddTodo } from "./handlers/addTodoHandler"
import { workGetTodos } from "./handlers/getTodosHandler"
import { workRemoveTodo } from "./handlers/removeTodoHandler"

function* todoSaga() {
    yield all([
        takeEvery(triggerTodos, workGetTodos),
        takeEvery(triggerAddTodo, workAddTodo),
        takeEvery(triggerRemoveTodo, workRemoveTodo)
    ])
}

export default todoSaga