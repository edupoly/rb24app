import React from 'react';
import Todo from './Todo';
function Todolist(){
    //state
    var [todos,setTodos]=React.useState([
                                        'get car',
                                        'buy newhouse',
                                        
                                 ])
    //logic
    function addTodo(){
        var nt = document.getElementById("d1").value;
        setTodos([nt,...todos])
    }
    var deleteTodo = React.useCallback(function(i){
        //alert("delete chddam"+i)
        var temp = [...todos]
        temp.splice(i,1);
        setTodos([...temp])
    },[])
    //template
    return(
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" id="d1"/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <Todo key={i} todo={todo} d={deleteTodo} i={i}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;
