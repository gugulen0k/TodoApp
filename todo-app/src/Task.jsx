import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import edit from './images/pencil.png'
import remove from './images/trash-bin.png'
import { triggerRemoveTodo } from './redux/slices/getTodosSlice'

const Block = styled('div')`
    background: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const CustomButton = styled('button')`
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    cursor: pointer;
    width: 50px;
    height: 40px;
    transition: 300ms cubic-bezier(.17,.64,.38,.84);

    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }
`

const Title = styled('span')`
    font-size: 1.4rem;
    font-family: Outfit;
    font-weight: 200;
`

const Image = styled('img')`
    width: 20px;
    height: 20px;
`

const Task = ({ id, name }) => {
    const dispatch = useDispatch()

    const removeTodo = (event) => {
        event.preventDefault()
        dispatch(triggerRemoveTodo(id))
    }

    return (
        <Block>
            <Title>{ name }</Title>
            <div style={{ display: 'flex', gap: '10px' }}>
                <CustomButton>
                    <Image src={edit} alt=""/>
                </CustomButton>
                <CustomButton onClick={removeTodo}>
                    <Image src={remove} alt="" />
                </CustomButton>
            </div>
        </Block>
    )
}

export default Task
