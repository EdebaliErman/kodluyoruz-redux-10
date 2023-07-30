import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthCovidDataTotal, selecCountryData, selectStatusName } from '../../Redux/covidSlice'

function Card() {

    const dispacth = useDispatch()
    const statusTotal = useSelector(selectStatusName)
    const country = useSelector(selecCountryData)
    useEffect(() => {

        if (statusTotal === "idle") {
            dispacth(fecthCovidDataTotal())
        }
        else if (statusTotal === "succes") {
            console.log("data succes")
        }
        else {
            console.log("error")
        }
    }, [dispacth, statusTotal, country])
    console.log(country, "asdf")
    return (
        <div >
            {statusTotal === "succes" ? <div className='Card'>
            <div className='infected'>
                    <h1>Infected</h1>
                    <h3>{country.confirmed}</h3>
                    <h3>Last updated at: </h3>
                    <h3>{country.last_update}</h3>
                </div>
                <div className='recovered'>
                    <h1>Recovered</h1>
                    <h3>{country.recovered}</h3>
                    <h3>Last updated at: </h3>
                    <h3>{country.last_update}</h3>
                </div>
            <div className='deaths'>
                    <h1>Deaths</h1>
                    <h3>{country.deaths}</h3>
                    <h3>Last updated at: </h3>
                    <h3>{country.last_update}</h3>
                </div>
                <div className='active'>
                    <h1>Active</h1>
                    <h3>{country.active}</h3>
                    <h3>Last updated at: </h3>
                    <h3>{country.last_update}</h3>
                </div>

            </div>
                : <div>
                    loading.....
                </div>}
        </div>
    )
}

export default Card
