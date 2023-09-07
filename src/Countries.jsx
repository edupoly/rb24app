import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Countries() {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(({data:countries})=>{
            setCountries(countries)
        })
    },[]);
  return (
    <div className='border border-danger border-3 p-3 m-3'>
        <h1>Countries</h1>
        <div className='d-flex'>
            <ul>
                {
                    countries.length>0 && countries.map((country)=>{
                        return  <li>
                                    <Link to={"details/"+country.name.common}>{country.name.common}</Link>
                                </li>
                    })
                }
            </ul>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
        
        
    </div>
  )
}

export default Countries