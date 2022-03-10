import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../redux/slices/getTodosSlice';
import todoInfoReducer from '../redux/slices/getTodoInfoSlice';
import createSagaMiddleware from 'redux-saga';
import todoSaga from './saga/rootSaga';

const saga = createSagaMiddleware();

export default configureStore({
    reducer: {
        todos: todosReducer,
        todoInfo: todoInfoReducer
    },
    middleware: [ saga ]
})

saga.run(todoSaga)