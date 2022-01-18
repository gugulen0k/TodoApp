import React from 'react'
import Task from './Task'

import styled from 'styled-components'

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
    return (
        <Block>
            <Title>Todos:</Title>
            <Task name="name lorem ipsum set dolor"/>
            <Task name="name"/>
            <Task name="name"/>
            <Task name="name"/>
            <Task name="name"/>
            <Task name="name"/>
        </Block>
    )
}

export default TodoList
