import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Task from './Task'
import { triggerGetTodos } from './slices/getTodosSlice'

const Block = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Title = styled('span')`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px;
`

const TodoList = () => {
    const todos = useSelector(state => state.todos.data)
    const isLoading = useSelector(state => state.todos.loading)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(triggerGetTodos())
    }, [ dispatch ])
    console.log(todos)

    return (
        <Block>
            <Title>Todos:</Title>
            { isLoading ? "loading..." : todos.map(task => <Task key={task.id} name={task.name}/>) }
        </Block>
    )
}

export default TodoList
