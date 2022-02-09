import { call, put } from 'redux-saga/effects'
import { successGetTodos, failureGetTodos } from '../../slices/getTodosSlice'
import { requestAllTodos } from '../../../services/getTodos'

export function* workGetTodos() {
    try {
        const data  = yield call(requestAllTodos)
        yield put(successGetTodos(data))
    } catch (error) {
        console.log(error.message)
        yield put(failureGetTodos(error.message))
    }
}