import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';

function Counter() {
    var {count} = useSelector((state)=>{return state.c});
    var dispatch = useDispatch()
    return (
        <div className='mybox'>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Inc</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{dispatch(decrement())}}>Dec</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}

export default Counter