import React from 'react';
import axios from 'axios'
function App() {
  var [countries,setCountries] = React.useState([])
  React.useEffect(()=>{
    axios.get("https://restcountries.com/v3/all").then((res)=>{
      setCountries([...res.data])
      console.log(res.data)
    })
  },[])
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS Training</h1>
      {
        countries.length>0 && countries.map((c)=>{
          return <li>{c.name.common}</li>
        })
      }
    </div>
  );
}

export default App;
