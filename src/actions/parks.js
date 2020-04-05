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
            const res = await trackPromise(fetch(process.env.REACT_APP_API_URL + '/api/v1/get_parks', {
                headers: {
                    "Content-Type": "application/json",
                    'Accept': "application/json"
                } 
            }))
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