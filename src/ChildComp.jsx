import React from 'react'

function ChildComp() {
    console.log("HI Child rendered")
  return (
    <div className='mybox'>ChildComp</div>
  )
}

export default React.memo(ChildComp)