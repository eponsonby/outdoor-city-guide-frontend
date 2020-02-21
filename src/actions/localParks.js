export const setlocalParks = parks => {
    return {
        type: "SET_LOCAL_PARKS",
        parks: parks
    }
}


  export const getLocalParks = () => {
    return async dispatch => {
        try {
            const res = await fetch('https://developer.nps.gov/api/v1/parks?parkCode=olym%2Cmora%2Cnoca%2Cromo%2Cyose%2Ccrla%2Cgrsm&api_key=ep5maXgiUeXGQzcXUpGOJwpQ3KveBes6YTvCBImm')
            if (!res.ok) {
                throw res
            }
            const parkData = await res.json()
            const parkList = parkData.data
            dispatch(setLocalParks(parkList))
        } catch (err) {
            alert("Failed to load local parks")
        }
    }
    
}