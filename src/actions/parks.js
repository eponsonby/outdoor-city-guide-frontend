import { trackPromise } from 'react-promise-tracker'

export const setNationalParks = parks => {
    return {
        type: "SET_NATIONAL_PARKS",
        parks: parks
    }
}
const getParkCodes = (city) => {
    switch (city) {
    case "Boulder":
        return [{codes: ["romo"]}]
    case "Reno":
        return [{codes: ["yose"]}]
    case "Portland":
        return [{codes: ["crla"]}]
    case "Asheville":
        return [{codes: ["grsm"]}]
    case "Seattle":
        return [{codes: ["olym", "mora", "noca", "laro"]}]
    case "Salt Lake City":
        return [{codes: ["care"]}]
    default:
        return "Error in Get Local Parks Action"
    }
}

const getUrls = (data) => {
    let urlsArray = []
    for (let element of data) {
        for (let code of element.codes)
            urlsArray.push(process.env.REACT_APP_API_URL + `api/v1/get_parks/?code=${code}`)
        }
    return urlsArray
}


export const getNationalParks = (city) => {
    const parkData = getParkCodes(city)
    const urls = getUrls(parkData)

  return async dispatch => {
          let parkData = await Promise.all (
              urls.map(async url => {
                  let response = await trackPromise(fetch(url, {
                      headers: {
                          "Content-Type": "application/json",
                          'Accept': "application/json"
                      }
                  }))
                  return response.json()
              })
          )
          dispatch(setNationalParks(parkData))
     
  }
  
}