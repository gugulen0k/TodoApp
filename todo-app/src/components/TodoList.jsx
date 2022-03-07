import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Task from './Task'
import { triggerTodos } from '../redux/slices/getTodosSlice'
import { triggerGetTodoInfo } from '../redux/slices/getTodoInfoSlice'
import { Link } from 'react-router-dom'

const Block = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 0 50px 0;
`

const CompletedTask = styled(Task)`
    opacity: 0.5;
`

const Title = styled('span')`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px;
`

const TodoList = () => {
    const todos = useSelector( state => state.todos.data )
    const isLoading = useSelector( state => state.todos.loading )
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch( triggerTodos() )
    }, [ dispatch ])

    return (
        <Block>
            <Title>Todos:</Title>
            { todos.length === 0 ? 'There is no todos in the database' : isLoading ? "loading..." : todos.map(task => {
                if ( task.completed === 1 ) {
                    // return 'hello'
                    return <CompletedTask key={task.id} id={task.id} name={task.name}/>
                } else {
                    return <Task key={task.id} id={task.id} name={task.name}/>
                }
            }) }
            {}
        </Block>
    )
}

export default TodoList
