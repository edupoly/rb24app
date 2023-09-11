import React from 'react'
import { Formik } from 'formik';
function StudentForm() {
  return (
    <div className='mybox'>
        <h1>StudentForm</h1>
        <Formik 
            initialValues={{firstname:'',lastname:'',age:''}}
            onSubmit={(sobj)=>{
                console.log(sobj)
            }}
        >
            {
                (fobj)=>{
                    return(
                        <form onSubmit={fobj.handleSubmit}>
                            <input type="text" placeholder='Firstname' name="firstname" onChange={fobj.handleChange}/>
                            <br />
                            <input type="text" placeholder='Lastname' name="lastname" onChange={fobj.handleChange}/>
                            <br />
                            <input type="text" placeholder='age' name="age" onChange={fobj.handleChange}/>
                            <br />
                            <button>Show</button>
                        </form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default StudentForm