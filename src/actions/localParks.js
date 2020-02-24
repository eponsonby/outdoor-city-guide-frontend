export const setLocalParks = localParks => {
    return {
        type: "SET_LOCAL_PARKS",
        localParks: localParks
    }
}


  export const getLocalParks = () => {
    return async dispatch => {
        try {
            const res = await fetch('https://ridb.recreation.gov/api/v1/recareas?state=NV', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    apikey: '89b576ed-004b-485c-adf9-f90fe2006284' 
                } 
            })
            if (!res.ok) {
                throw res
            }
            const parkData = await res.json()
            console.log(parkData)
            const parkList = parkData.data
            dispatch(setLocalParks(parkList))
        } catch (err) {
            alert("Failed to load local parks")
        }
    }
    
}