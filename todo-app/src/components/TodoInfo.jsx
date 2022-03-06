import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { triggerGetTodoInfo } from "../redux/slices/getTodoInfoSlice";

const TodoInfo = () => {
    const todoInfo = useSelector(state => state.todoInfo.data)
    const dispatch = useDispatch()
    let params = useParams()

    useEffect(()=>{
        dispatch(triggerGetTodoInfo(params.id))
        // console.log(todoInfo)
    }, [])    

    return (
        <div>
            <p>{todoInfo.name}</p>
        </div>
    )
}

export default TodoInfo;