import React from "react";
import {store} from './app/store';
import { Provider } from "react-redux";
import Countries from "./features/countries/Countries";
import Header from "./shared/Header";
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <Provider store={store}>
      <div className="mybox">
        <Header></Header>
        <Outlet/>
      </div>
    </Provider>
    
  );
  
}

export default App;
