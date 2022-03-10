import { call, put } from 'redux-saga/effects'
import { updateTodo } from '../../../services/updateTodo'
import { failureGetTodoInfo, successGetTodoInfo } from '../../slices/getTodoInfoSlice'


export function* workUpdateTodo ( action ) {
    try {
        const todo = yield call(updateTodo, action.payload.id, action.payload.newName, action.payload.completedValue)
        yield put(successGetTodoInfo(todo))
    } catch (error) {
        yield put(failureGetTodoInfo(error.message))
    }
}