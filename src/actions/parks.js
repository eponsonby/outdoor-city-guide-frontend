export const setParks = parks => {
    return {
        type: "SET_PARKS",
        parks: parks
    }
}


  export const getParks = () => {
    return async dispatch => {
        try {
            const res = await fetch('https://developer.nps.gov/api/v1/parks?stateCode=tn%2Cco%2Cwa&api_key=ep5maXgiUeXGQzcXUpGOJwpQ3KveBes6YTvCBImm')
            if (!res.ok) {
                throw res
            }
            const parkData = await res.json()
            const parkList = parkData.data
            dispatch(setParks(parkList))
        } catch (err) {
            alert("Failed to load parks")
        }
    }
}