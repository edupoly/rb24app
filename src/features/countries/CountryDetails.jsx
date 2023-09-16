import React from 'react'
import {useParams} from 'react-router-dom'
import { useGetCountryDetailsByNameQuery } from '../../services/countriesApi';
function CountryDetails() {
    var x = useParams();
    var {isLoading,data}=useGetCountryDetailsByNameQuery(x.cname)
  return (
    <div className='p-4'>
        <h4>{x.cname} CountryDetails</h4>
        {isLoading && <b>Loading....</b>}
        {!isLoading && JSON.stringify(data)}
    </div>
  )
}

export default CountryDetails