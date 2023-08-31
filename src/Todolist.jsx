import React, { useEffect } from 'react';

function Todolist(){
    //state
    var [todos,setTodos]=React.useState(['get car','buy newhouse'])
    //logic
    useEffect(()=>{
        alert("Todolist")
      },[])
    //template
    return(
        <div className='mybox'>
            <h1>Todolist</h1>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <li key={i}>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;
