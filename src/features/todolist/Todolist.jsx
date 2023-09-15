import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice';

function Todolist() {
    var [nt,setNt]=useState('');
    var {todos}=useSelector((state)=>{return state.t})
    var dispatch = useDispatch();
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNt(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(nt))}}>Add Todo</button>
        <ul>
            {
                todos.map((t,i)=>{
                    return <li>
                            {t}
                            <button onClick={()=>{dispatch(deleteTodo(i))}}>
                                Delete
                            </button>
                            </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist

/*
    Create-POST
    Read-GET
    Update-UPDATE
    Delete-DELETE
*/