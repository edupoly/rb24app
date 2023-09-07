import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails() {
    var {cname} = useParams();
    const [countryDetails, setCountryDetails] = useState(null)
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/name/"+cname)
        .then((res)=>{
        
            setCountryDetails({...res.data[0]})
        })
    },[cname])

  return (
    <div className='border border-2 border-success p-3'>
        {/* <i>{JSON.stringify(countryDetails)}</i> */}
        {
            countryDetails && (
                <>
                    <h1>{countryDetails.name.common}</h1>
                    <img src={countryDetails.flags.png} alt="" />
                </>
            )
        }
    </div>
  )
}

export default CountryDetails