import { call, put, takeEvery } from 'redux-saga/effects'
import { triggerGetTodos, successGetTodos, failureGetTodos } from './slices/getTodosSlice'
import axios from 'axios'

function* workTriggerGetTodos() {
    try {
        const todos = yield call(() => axios.get('http://localhost:5000/api/tasks').then(response => response.data.tasks))
        yield put(successGetTodos(todos))
        localStorage.setItem('todos', JSON.stringify(todos))
    } catch (error) {
        yield put(failureGetTodos)
    }
}

function* todoSaga() {
    yield takeEvery(triggerGetTodos, workTriggerGetTodos)
}

export default todoSaga