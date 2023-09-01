import React, { useEffect } from "react";
import Address from "./Address";

function App() {
  var firstnameRef = React.useRef();
  var lastnameRef = React.useRef();
  var addressRef = React.useRef();

  useEffect(()=>{
    firstnameRef.current.focus();
  },[])
  function focusLastname(e){
    if(e.key==="Enter"){
      lastnameRef.current.focus();
    }
  }
  function focusAddress(e){
    if(e.key==="Enter"){
      addressRef.current.focus();
    }
  }
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS Training</h1>
      <input type="text" ref={firstnameRef} onKeyUp={(ev)=>{focusLastname(ev)}}/>
      <br />
      <input type="text" ref={lastnameRef} onKeyUp={(ev)=>{focusAddress(ev)}}/>
      <Address ref={addressRef}></Address>
    </div>
  );
  
}

export default App;
