export const setLocalParks = localParks => {
    return {
        type: "SET_LOCAL_PARKS",
        localParks: localParks
    }
}

const getParkTypeAndIds = (city) => {
    switch (city) {
    case "Boulder":
        return [{type: "recareas", ids: ["1106"]}]
    case "Reno":
        return [{type: "facilities", ids: ["239692", "239747"]}]
    case "Portland":
        return [{type: "recareas", ids: ["1106", "1102"]}]
    case "Asheville":
        return [
            {type: "facilities", ids: ["264802", "240530"]},
            {type: "recareas", ids: ["2593"]}
        ]
    case "Salt Lake City":
        return [
            {type: "facilities", ids: ["236556"]},
            {type: "recareas", ids: ["1035", "14748"]}
        ]
    default:
        return "Error in Get Local Parks Action"
    }
}


const getUrls = (data) => {
    let urlsArray = []
    for (let element of data) {
        if (element.type === "facilities") {
                for (let ids of element.ids)
                 urlsArray.push(`http://localhost:3001/api/v1/get_local_parks/?type=facilities&id=${ids}`)
        }
        
        if (element.type === "recareas") {
            for (let ids of element.ids)
                urlsArray.push(`http://localhost:3001/api/v1/get_local_parks/?type=recareas&id=${ids}`)
            }   
    }
    return urlsArray
}

  export const getLocalParks = (city) => {
      const parkData = getParkTypeAndIds(city)
      const urls = getUrls(parkData)

    return async dispatch => {
            let parkData = await Promise.all (
                urls.map(async url => {
                    let response = await fetch(url)
                    return response.json()
                })
            )
            dispatch(setLocalParks(parkData))
        //     const res = await fetch('http://localhost:3001/api/v1/get_local_parks/?id=1106')

        //     if (!res.ok) {
        //         throw res
        //     }
        //     const parkData = await res.json()
        //     dispatch(setLocalParks(parkData))
        // } catch (err) {
        //     alert("Failed to load local parks")
        // }
    }
    
}