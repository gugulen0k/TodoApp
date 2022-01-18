import React from 'react'
import styled from 'styled-components';

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

const TodoForm = () => {
    return (
        <div>
            <CustomForm method="post">
                <CustomInput type="text" />
                <CustomButton type='submit'>Add new task</CustomButton>
            </CustomForm>
        </div>
    )
}

export default TodoForm;
