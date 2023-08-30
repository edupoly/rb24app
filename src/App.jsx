import React from 'react';

function App() {
  var [x,setx] = React.useState(133);
  var [y,sety] = React.useState(234);
  React.useEffect(()=>{
    console.log("absdf")
  },[]);

  React.useEffect(()=>{
    console.log("x updated")
  },[x]);
  React.useEffect(()=>{
    console.log("y updated")
  },[y]);

  React.useEffect(()=>{
    console.log("balu")
  });
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS Training</h1>
      <h1>Counter:{x}</h1>
      <h1>Counter:{y}</h1>
      <button onClick={()=>{setx(x+1)}}>Increment X</button>
      <button onClick={()=>{sety(y+1)}}>Increment Y</button>
    </div>
  );
}

export default App;
