import React from 'react'

function Todo(props) {
    
  return (
        <>
            <li className='mybox'>
                {props.todo}
                <button onClick={()=>{props.d(props.i)}}>Delete</button>
                <button>Done</button>
                <button>Undo</button>
            </li>
        </>
  )
}

export default Todo