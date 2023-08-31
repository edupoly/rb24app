import React, { useEffect } from 'react';

function Counter(){
    //state
    var [count,setCount]=React.useState(0)
    //logic
    useEffect(()=>{
        alert("Counter")
      },[])
    //template
    return (
        <div className='mybox'>
            <h1>Counter:{count}</h1>
        </div>
    )
}

export default Counter;