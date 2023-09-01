import React,{forwardRef} from 'react'

var Address = forwardRef((props,ref1)=>{

  return (
    <div className='mybox'>
        <h1>Address</h1>
        <input type="text" ref={ref1}/>
    </div>
  )
})

export default Address