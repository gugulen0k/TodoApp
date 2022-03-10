import React, { useEffect,  useRef } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { triggerAddTodo } from '../redux/slices/getTodosSlice';

const CustomInput = styled('input')`
    height: 40px;
    padding: 0 10px;
    font-size: 1.2rem;
    font-family: Outfit;
    font-weight: 300;
    border-radius: 5px;
    outline: none;
    border: 0;
    border: 1px solid rgba(27, 31, 35, 0.15);
    transition: 300ms cubic-bezier(.17,.64,.38,.84);

    &:focus {
        border-color: rgba(27, 31, 35, 0.6);
    }
`

const CustomButton = styled('button')`
    height: 40px;
    background: #ffffff;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 5px;
    font-size: 1.2rem;
    font-family: Outfit;
    color: #212126;
    font-weight: 400;
    padding: 0 10px;
    cursor: pointer;
    transition: 300ms cubic-bezier(.17,.64,.38,.84);

    &:hover {
        border-color: rgba(27, 31, 35, 0.6);
        background: rgba(27, 31, 35, 0.05);
    }
`

const CustomForm = styled('form')`
    display: flex;
    gap: 10px;
`

const ErrorMessage = styled('span')`
    color: #df5454;
    margin: 5px 0;
`

const Block = styled('div')`
    display: flex;
    flex-direction: column;
`

const TodoForm = () => {
    const inputRef = useRef()
    const todos = useSelector(state => state.todos.data).map(todo => todo.name)
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    const addTodo = (event) => {
        event.preventDefault()
        const newTask = inputRef.current.value

        if ( newTask.trim().length === 0 ) {
            setError(true)
            setErrorMessage('Task could not be empty')
            return
        } else {
            inputRef.current.value = ''
            setError(false)
            dispatch(triggerAddTodo(newTask))
        }
    }

    return (
        <div>
            <CustomForm method="post">
                <Block>
                    <CustomInput ref={inputRef} type="text" style={{ borderColor: error === true ? '#df5454' : 'rgba(27, 31, 35, 0.6)' }}/>
                    <ErrorMessage style={{ visibility: error ? 'visible' : 'hidden' }}>{ errorMessage }</ErrorMessage>
                </Block>
                <CustomButton onClick={addTodo}>Add new task</CustomButton>
            </CustomForm>
        </div>
    )
}

export default TodoForm;
