import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Aboutus from './Aboutus';
import Courses from './Courses';
import Countries from './Countries';
import CountryDetails from './CountryDetails';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/aboutus",
            element:<Aboutus></Aboutus>
        },
        {
            path:"/courses",
            element:<Courses></Courses>
        },
        {
            path:"/countries",
            element:<Countries></Countries>,
            children:[
                {
                    path:"/countries/details/:cname",
                    element:<CountryDetails></CountryDetails>
                }
            ]
        }
      ]
    },
    
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}></RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
