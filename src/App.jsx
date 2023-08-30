import React from 'react'
import ChildComp from './ChildComp';

function App() {
  const [c, setc] = React.useState(0)
  function inc(){
    setc(c+1)
  }
  var ar = React.useMemo(()=>[12,23],[])
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS Training</h1>
      <h1>Count:{c}</h1>
      <button onClick={()=>{inc()}}>increment</button>
      <ChildComp x={ar}></ChildComp>
    </div>
  );
}

export default App;
