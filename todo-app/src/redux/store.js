import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../redux/slices/getTodosSlice';
import createSagaMiddleware from 'redux-saga';
import todoSaga from './saga/rootSaga';

const saga = createSagaMiddleware();

export default configureStore({
    reducer: {
        todos: todosReducer
    },
    middleware: [ saga ]
})

saga.run(todoSaga)