import React from 'react';

function Todolist(){
    //state
    var [todos,setTodos]=React.useState(['get car','buy newhouse'])
    //logic
    //template
    return(
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" />
            <ul>
                {
                    todos.map((todo)=>{
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;
