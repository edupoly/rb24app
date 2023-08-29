import React from 'react';

function Todolist(){
    console.log("Todolist first line")
    //state
    var [todos,setTodos]=React.useState(['get car','buy newhouse'])
    //logic
    function addTodo(){
        console.log("add todo fun")
        var nt = document.getElementById("d1").value;
        setTodos([...todos,nt])
    }
    //template
    return(
        <>
            <div className='mybox'>
            {console.log("inside return")}

                <h1>Todolist</h1>
                <input type="text" id="d1"/>
                <button onClick={()=>{addTodo()}}>Add Todo</button>
                <ul>
                    {
                        todos.map((todo,i)=>{
                            return <li key={i}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default React.memo(Todolist);
