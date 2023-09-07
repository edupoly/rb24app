import React from 'react'

function Courses() {
    var [courses,setCourses] = React.useState([
        "reactJS",
        "Angular",
        "Mongodb",
        "Nodejs"
    ])
  return (
    <div>
        <h1>Our Best Courses</h1>
        <ul>
            {
                courses.map((course)=>{
                    return <li>{course}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Courses