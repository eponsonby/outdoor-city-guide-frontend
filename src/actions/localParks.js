export const setLocalParks = localParks => {
    return {
        type: "SET_LOCAL_PARKS",
        localParks: localParks
    }
}




  export const getLocalParks = (city) => {
    const getParkIds = () => {
        switch (city) {
        case "Boulder":
            return {type: "recareas", ids: "1106"}
        case "Reno":
            return {type: "facilities", ids: ["239692", "239747"]}
        case "Portland":
            return {type: "recareas", ids: ["1106", "1102"]}
        case "Asheville":
            return [
                {type: "facilities", ids: ["264802", "240530"]},
                {type: "recareas", ids: ["2593"]}
            ]
        case "Salt Lake City":
            return [
                {type: "facilities", ids: ["236556", "240530"]},
                {type: "recareas", ids: ["1035", "14748"]}
            ]
        default:
            return "Nothing"
        }
}

const parkIds = getParkIds()
const test = parkIds.map(id => id)
console.log(test)
    return async dispatch => {
        
        try {
            const res = await fetch('http://localhost:3001/api/v1/get_local_parks/?id=1106')
            if (!res.ok) {
                throw res
            }
            const parkData = await res.json()
            dispatch(setLocalParks(parkData))
        } catch (err) {
            alert("Failed to load local parks")
        }
    }
    
}