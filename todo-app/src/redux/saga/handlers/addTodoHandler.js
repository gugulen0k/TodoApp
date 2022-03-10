import { call, put } from 'redux-saga/effects'
import { addTodo } from '../../../services/addTodo'
import { failureAddTodo, successAddTodo } from '../../slices/getTodosSlice'


export function* workAddTodo (action) {
    try {
        const todo = yield call(addTodo, action.payload)
        yield put(successAddTodo(todo))
    } catch (error) {
        yield put(failureAddTodo(error.message))
    }
}