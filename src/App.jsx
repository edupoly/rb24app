import { useState } from "react";
import First from "./First";
import MyContext from "./MyContext";

function App() {
  var [x,setX]=useState(102);
  return (
    <MyContext.Provider value={x}>
      <div className="mybox">
        <h1>Welcome to Edupoly ReactJS Training</h1>
        <h2>x::{x}</h2>
        <button onClick={()=>{setX(x+1)}}>Increment</button>
        <First x={x}></First>
      </div>
    </MyContext.Provider>
  );
}

export default App;
