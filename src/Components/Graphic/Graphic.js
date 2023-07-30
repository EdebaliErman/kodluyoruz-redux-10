import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from "chart.js"
import { fecthCovidDataTotal, selecCountryData, selectStatusName } from '../../Redux/covidSlice';
import { useDispatch, useSelector } from 'react-redux';

Chart.register(...registerables);

function Graphic() {
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
    const state = {
        labels: ["Infected", "Recovered", "Deaths", "Active"],
        datasets:
            [
                {
                    backgroundColor:["rgb(59 130 246 / .5)","rgb(187 247 208)","rgb(254 202 202)","rgb(254 240 138)"],
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderRadius:0,
                    borderWidth: 0,
                    data:[country.confirmed,country.recovered,country.deaths,country.active]
                }
            ]
    }
    return (
        <div>
            <section>
                <h1>Covid</h1>
                <Bar data={state}/>
            </section>
        </div>
    )
}

export default Graphic
