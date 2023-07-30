import { createSlice } from "@reduxjs/toolkit";


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthCovidData = createAsyncThunk('covid', async () => {
    const res = await axios(`https://covid-api.com/api/reports`)
    return res.data.data
})
export const fecthCovidDataTotal = createAsyncThunk('covid/total', async (country) => {
    const res = await axios(`https://covid-api.com/api/reports/total?date=2020-03-14&iso=${country}`)
    return res.data.data
    
})

export const covidSlice = createSlice({
    name: "covid",
    initialState: {
        status: "idle",
        statusName: "idle",
        country: "AUS",
        countryData: [],
        data: [],
    },
    reducers: {
        setCountry: (state, action) => {
            state.country = action.payload

        }
    },
    extraReducers: {
        [fecthCovidData.pending]: (state, action) => {
            state.status = "loading"
        },
        [fecthCovidData.fulfilled]: (state, action) => {
            state.status = "succes"
            state.data = action.payload
        },
        [fecthCovidData.rejected]: (state, action) => {
            state.status = "error"
        },

        ///
        [fecthCovidDataTotal.pending]: (state, action) => {
            state.statusName = "loading"
        },
        [fecthCovidDataTotal.fulfilled]: (state, action) => {
            state.statusName = "succes"
            state.countryData = action.payload
        },
        [fecthCovidDataTotal.rejected]: (state, action) => {
            state.statusName = "error"
        }

    }
})
export const selectCountry = (state) => state.covid.country
export const selectData = (state) => state.covid.data
export const selecCountryData = (state) => state.covid.countryData
export const selectStatus = (state) => state.covid.status
export const selectStatusName = (state) => state.covid.statusName

export const { setCountry } = covidSlice.actions
export default covidSlice.reducer