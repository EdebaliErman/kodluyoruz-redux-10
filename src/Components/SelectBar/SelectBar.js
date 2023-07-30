import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthCovidDataTotal, selectCountry, setCountry } from '../../Redux/covidSlice'


function SelectBar({ data }) {
  const dispacth = useDispatch()
  const country = useSelector(selectCountry)
 
 
useEffect(()=>{
  dispacth(fecthCovidDataTotal(country))

},[dispacth,country])

  return (
    <div>
      {console.log(country)}
      <select
        onChange={e =>  dispacth(setCountry(e.target.value))}
      >
        <option>Select Country</option>
        {data.map((c, key) => <option key={key}> {c.region.iso}</option>)}
      </select>
    </div>
  )
}

export default SelectBar
