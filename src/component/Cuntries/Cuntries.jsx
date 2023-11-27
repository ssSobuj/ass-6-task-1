/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./Cuntries.css"

import { useEffect, useState } from 'react'
import Country from '../Country/Country'


export default function Cuntries() {
    const [countries,setCuntres] = useState([])
    const url = "https://restcountries.com/v3.1/all"

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setCuntres(data))
        
    },[])

    const FilterCountry = countries.filter((val)=> val.name.common !== "Israel")

  return (

    <>
        
        <h1 className="head">Countris</h1>
        <div className='Countris'>
            {
                FilterCountry.map(cuontry=> <Country country={cuontry} key={cuontry.ccn3}/>)
            }
        </div>
    </>
  )
}
