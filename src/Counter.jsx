import React from 'react';

function Counter(){
    //state
    var [count,setCount]=React.useState(0)
    //logic
    //template
    return (
        <div className='mybox'>
            <h1>Counter:{count}</h1>
        </div>
    )
}

export default Counter;