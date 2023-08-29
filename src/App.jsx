import React from 'react';
import Todolist from './Todolist'
function App() {
  console.log("Hello First line");
  var [c,setC] = React.useState(1);
  function abc(){
    console.log("abc function")
    setC(c+10);
  }
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS Training</h1>
      <h1>{c}</h1>
      <button onClick={()=>{abc()}}>Increment</button>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
