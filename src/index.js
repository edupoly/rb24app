import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import Books from './features/books/Books';
import Counter from './features/counter/Counter';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Countries from './features/countries/Countries';
import CountryDetails from './features/countries/CountryDetails';
import AddBook from './features/books/AddBook';
import UpdateBook from './features/books/UpdateBook';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/counter",
            element:<Counter></Counter>
        },
        {
            path:"/countries",
            element:<Countries></Countries>,
            children:[
                {
                    path:'/countries/:cname',
                    element:<CountryDetails></CountryDetails>
                }
            ]
        },
        {
          path:'/books',
          element:<Books></Books>,
          children:[
            {
              path:'/books/addBook',
              element:<AddBook></AddBook>
            },
            {
              path:"/books/updateBook",
              element:<UpdateBook></UpdateBook>
            }
          ]
        }
      ]
    }
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
