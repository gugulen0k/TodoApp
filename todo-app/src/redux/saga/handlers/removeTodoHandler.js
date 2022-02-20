import { call, put } from 'redux-saga/effects'
import { removeTodo } from '../../../services/removeTodo'
import { failureRemoveTodo, successRemoveTodo } from '../../slices/getTodosSlice'


export function* workRemoveTodo (action) {
    try {
        const todo = yield call(removeTodo, action.payload)
        yield put(successRemoveTodo(todo.id))
    } catch (error) {
        yield put(failureRemoveTodo(error.message))
    }
}