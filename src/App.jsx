import React from "react";
import { Link, Outlet } from "react-router-dom";
function App() {
  
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS Training</h1>
      <Link to="/courses">Courses</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/aboutus">ABoutus</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/countries">Countries</Link>
      <Outlet></Outlet>
    </div>
  );
  
}

export default App;
