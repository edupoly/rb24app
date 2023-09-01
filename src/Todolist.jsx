import React from 'react';
import Todo from './Todo';
function Todolist(){
    //state
    var [todos,setTodos]=React.useState([
                                        'get car',
                                        'buy newhouse',
                               ])
    var [nt,setNt] = React.useState('');  
    //logic
    function addTodo(){
        setTodos([...todos,nt])
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
            <input type="text" onChange={(ev)=>{setNt(ev.target.value)}}/>
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
