import { trackPromise } from 'react-promise-tracker'

export const setClimbingGyms = climbingGyms => {
    return {
        type: "SET_CLIMBING_GYMS",
        climbingGyms
    }
}

// Get gym Yelp ids
const getGymIds = (city) => {
    switch (city) {
    case "Boulder":
        return [
            {ids: [
                "EqW-IXkTbozZbHkfLlEpHA",
                "M4qlLkuG3Lbppj_nktyDrg",
                "oAmz7EL6usZgxKBGn3sCqw",
            ]}
        ]
    case "Seattle":
        return [
            {ids: [
                "5gqvCTNk7vva9scWJCfX3Q",
                "cq9AmDbp3yCpGAo6VAY5Pg",
                "02aOKcQTbtH9V9SqcDXBfA",
                "HzBqeVJsDWPU79DxuNFWjA",
            ]}
        ]
    case "Reno":
        return [
            {ids: [
                "8h1aTLrC7xpDMqIGHQZlPw",
                "QiNYgFrT6ySPok_6ePFRqw",
            ]},
        ]
    case "Portland":
        return [
            {ids: [
                "6hOQqQa5yK9son4ZKUKoFg",
                "AtQvTO34E81vcYGnhp9R2w",
                "79aeWDESHzlpJEIwJ73aYA",
                "gf9XrhAwGr6MHnzthCObPg",
            ]}
        ]
    case "Asheville":
        return [
            {ids: [
                "qVrrsrRw4stD78zTFm1y4Q",
            ]}
        ]
    case "Salt Lake City":
        return [
            {ids: [
                "TlnNVgPMdmv6fyV1Kh5TGw",
                "P-uPe_PRyseEi84rc7Ex3Q",
                "UTMSiLFDOTwtqaH2k2eD6w",
            ]}
        ]
    default:
        return "Error in Climbing Gyms Action"
    }
}

// get urls of gyms to fetch
const getUrls = (data) => {
    let urlsArray = []
    for (let element of data) {
        for (let id of element.ids)
            urlsArray.push(process.env.REACT_APP_API_URL + `/api/v1/get_climbing_gyms/?id=${id}`)
        }
    return urlsArray
}

// Map over the urls, do a fetch request for each
export const getClimbingGyms = (city) => {
    const gymIds = getGymIds(city)
    const urls = getUrls(gymIds)

    return async dispatch => {
        let gymData = await Promise.all (
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
        dispatch(setClimbingGyms(gymData))
  }
  
}
