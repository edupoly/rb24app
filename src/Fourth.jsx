import React, { useContext } from 'react'
import MyContext from './MyContext'
function Fourth() {
    var y = useContext(MyContext);
  return (

        <div className="mybox">
            <h1>Fourth</h1>
            <h1>y::{y}</h1>

        </div>

  )
}

export default Fourth