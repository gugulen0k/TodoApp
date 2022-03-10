import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { resetTodoInfo, triggerGetTodoInfo } from "../redux/slices/getTodoInfoSlice";
import { triggerUpdateTodoInfo } from "../redux/slices/updateTodoSlice";

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
    grid-column: 1/3;
    height: 40px;
    background: #ffffff;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 5px;
    font-size: 1.2rem;
    font-family: Outfit;
    color: #212126;
    font-weight: 400;
    padding: 0 10px;
    margin: 20px 0 0 0;
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

const SaveMessage = styled.div`
    position: absolute;
    top: 50px;
    right: 50px;
    background: #54df82;
    color: white;
    font-size: 1.3rem;
    border-radius: 10px;
    padding: 25px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    opacity: 0;
    transition: 300ms cubic-bezier(.17,.64,.38,.84);
`

const TodoInfo = () => {
    const { id, name, completed, created_at, updated_at } = useSelector(state => state.todoInfo.data)
    const dispatch = useDispatch()
    let params = useParams()
    const inputRef = useRef()
    const checkboxRef = useRef();
    const [ error, setError ] = useState(false)
    const [ opacity, setOpacity ] = useState(0)
    const [ errorMessage, setErrorMessage ] = useState('')

    const created = new Date(created_at)
    const updated = new Date(updated_at)
    const createdAt = created.getDate() + '/' + ( created.getMonth() + 1 ) + '/' + created.getFullYear()
    const updatedAt = updated.getDate() + '/' + ( updated.getMonth() + 1 ) + '/' + updated.getFullYear()

    const updateTodo = (event) => {
        event.preventDefault()
        const newName = inputRef.current.value
        const completedValue = checkboxRef.current.checked

        if ( newName.trim().length === 0 ) {
            setError(true)
            setErrorMessage('Task could not be empty')
            return
        } else {
            setError(false)
            const obj = {
                id,
                newName,
                completedValue
            }
            dispatch(triggerUpdateTodoInfo( obj ))
            dispatch(resetTodoInfo())
            setOpacity(1)
        }
    }

    useEffect(()=>{
        dispatch(triggerGetTodoInfo(params.id))
    }, [])

    return (
        <Block>
            <SaveMessage style={{ opacity: opacity}}>Task successfully changed</SaveMessage>
            <CustomForm action="post">
                <span>Id:</span>
                <span>{ id }</span>

                <span>Title:</span>
                <CustomInput ref={inputRef} defaultValue={ name } type="text" style={{ borderColor: error === true ? '#df5454' : 'rgba(27, 31, 35, 0.6)' }}/>

                <span>Completed:</span>
                <input type="checkbox" name="completed" id="completed" defaultChecked={completed} ref={checkboxRef}/>

                <span>Created at:</span>
                <span>{ createdAt }</span>

                <span>Updated at:</span>
                <span>{ updatedAt }</span>
                <CustomButton type="submit" onClick={ updateTodo }>SAVE</CustomButton>
            </CustomForm>
        </Block>
    )
}

export default TodoInfo;