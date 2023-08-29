import React from 'react';
import Todo from './Todo';
function Todolist(){
    //state
    var [todos,setTodos]=React.useState([
                                        'get car',
                                        'buy newhouse',
                                        'get a bike',
                                        'pay bills',
                                        'make a new board'
                                    ])
    //logic
    function deleteTodo(i){
        //alert("delete chddam"+i)
        var temp = [...todos]
        temp.splice(i,1);
        setTodos([...temp])
    }
    //template
    return(
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" />
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <Todo todo={todo} d={deleteTodo} i={i}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;
