import React from 'react'

function Todo(props) {
    console.log("Todo comp rendered")
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

export default React.memo(Todo)