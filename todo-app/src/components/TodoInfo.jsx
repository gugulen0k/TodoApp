import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { triggerGetTodoInfo } from "../redux/slices/getTodoInfoSlice";

const CustomForm = styled.form`
    background: white;
    width: max-content;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    border-radius: 10px;
    padding: 25px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const Block = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

    &:focus,
    &:hover {
        border-color: rgba(27, 31, 35, 0.6);
    }
`

const TodoInfo = () => {
    const todos = useSelector(state => state.todos.data).map(todo => todo.name)
    const { id, name, completed, created_at, updated_at } = useSelector(state => state.todoInfo.data)
    const dispatch = useDispatch()
    let params = useParams()
    const inputRef = useRef();
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const created = new Date(created_at).toLocaleString("en-US");
    const updated = new Date(updated_at).toLocaleString("en-US");

    const changeTodo = (event) => {
        event.preventDefault()
        const newTask = inputRef.current.value

        if ( newTask.trim().length === 0 ) {
            setError(true)
            setErrorMessage('Task could not be empty')
            return
        } if ( todos.includes(newTask) ) {
            setError(true)
            setErrorMessage("This task already exists")
            return
        } else {
            inputRef.current.value = ''
            setError(false)
            // dispatch(triggerAddTodo(newTask))
        }
    }

    useEffect(()=>{
        dispatch(triggerGetTodoInfo(params.id))
    }, [])

    return (
        <Block>
            <CustomForm action="post">
                <span>Id:</span>
                <span>{ id }</span>

                <span>Title:</span>
                <CustomInput ref={inputRef} defaultValue={ name } type="text" style={{ borderColor: error === true ? '#df5454' : 'rgba(27, 31, 35, 0.6)' }}/>

                <span>Completed:</span>
                <input type="checkbox" name="completed" id="completed" value="true"/>

                <span>Created at:</span>
                <span>{ created }</span>

                <span>Updated at:</span>
                <span>{ updated }</span>
                <CustomButton type="submit" onClick={ changeTodo }>SAVE</CustomButton>
        </CustomForm>
        </Block>
    )
}

export default TodoInfo;