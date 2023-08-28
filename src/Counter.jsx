import React from 'react';

function Counter(props){
    console.log(props)
    //state
    var [count,setCount]=React.useState(props.s)
    //logic
    function inc(){
        setCount(count+props.i)
    }
    function dec(){
        setCount(count-props.i)
    }
    //template
    return (
        <div className='mybox'>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{inc()}}>Increment</button>
            <button onClick={()=>{dec()}}>Decrement</button>
        </div>
    )
}

export default Counter;