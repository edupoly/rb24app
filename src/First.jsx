import React from 'react'
import Second from './Second'

function First(props) {
  return (
    <div className='mybox'>
        <h1>First</h1>
        <h3>x::{props.x}</h3>
        <Second x={props.x}></Second>
    </div>
  )
}

export default First