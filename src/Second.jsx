import React from 'react'
import Third from './Third'

function Second(props) {
  return (
    <div className="mybox">
        <h1>Second</h1>
        <h3>x:{props.x}</h3>
        <Third></Third>
    </div>
  )
}

export default Second