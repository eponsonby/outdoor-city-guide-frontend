import { trackPromise } from 'react-promise-tracker'

export const setNationalParks = parks => {
    return {
        type: "SET_NATIONAL_PARKS",
        parks: parks
    }
}


  export const getNationalParks = () => {
    return async dispatch => {
        try {
            const res = await trackPromise(fetch('https://the-trailhead-api.herokuapp.com/api/v1/get_parks'))
            if (!res.ok) {
                throw res
            }
            const parkData = await res.json()
            const parkList = parkData.data
            dispatch(setNationalParks(parkList))
        } catch (err) {
        }
    }
    
}