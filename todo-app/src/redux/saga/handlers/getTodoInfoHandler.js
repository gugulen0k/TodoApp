import { call, put } from "redux-saga/effects";
import { requestTodoInfo } from "../../../services/getTodoInfo";
import { successGetTodoInfo, failureGetTodoInfo } from "../../slices/getTodoInfoSlice";

export function* workGetTodoInfo( action ) {
    try {
        const data = yield call(requestTodoInfo, action.payload)
        yield put(successGetTodoInfo(data))
    } catch (error) {
        yield put(failureGetTodoInfo(error.message))
    }
}