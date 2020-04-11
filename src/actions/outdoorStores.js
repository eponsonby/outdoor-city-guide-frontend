import { trackPromise } from 'react-promise-tracker'

export const setOutdoorStores = outdoorStores => {
    return {
        type: "SET_OUTDOOR_STORES",
        outdoorStores
    }
}

// Get store Yelp ids
const getStoreIds = (city) => {
    switch (city) {
    case "Boulder":
        return [
            {ids: [
                "4fDipTjR2d41q2g17jiAhg",
                "W3B5QAXB_XtNzSFkRTPJWw",
                "UekLtguNPzK9NqR66PhqtQ",
                "SN6yju1IEZMQ7C-2QKrePw",
                "Fj9RIrjJwYrzAzkV32ZWmA",
            ]}
        ]
    case "Seattle":
        return [
            {ids: [
                "qlNIrY3x0eivDug3wFPUkA",
                "HD48T-zBFkxyLw3ZqF8ZtQ",
                "jvB4CDLG87BlH7hmI_t5ZA",
                "oWrQ1cUiWg9kYT-tWAB6Zg",
                "AHOi9lTYYhMcDyAepTbHfA"
            ]}
        ]
    case "Reno":
        return [
            {ids: [
                "GLbVRaeuuWLqj_Ef2La-kw",
                "pqW5dIZFoBsqA1LENQmOow",
                "HxJsDfVHTsx0081cvqguHw",
                "lpS1TedM7BR-r2DzeA2MYA",
                "KlipvAMuvybbCSjGvNmbmA",
            ]},
        ]
    case "Portland":
        return [
            {ids: [
                "FrvLdvsmYjxGZ9BD1WPAcQ",
                "oggnL97M2-Oq4uIBGqfJqw",
                "sqQ7syRrq45q730yw6xAww",
                "qIy9MlVhCheT-AWZMVkP1A",
                "ZPsW-XIo8bEinuAvmQr4UQ"
            ]}
        ]
    case "Asheville":
        return [
            {ids: [
                "nVZkNAgtSMZKgQU9PZ4dCg",
                "68KSfrTi47QTKgktXVgmog",
                "WMSyA07X_AqwM-z0QwzFCA",
                "ei6M4qDU6xZfdkZjue7Z1A",
                "I8LVVL5gqaVrXB9R_r8sEQ"
            ]}
        ]
    case "Salt Lake City":
        return [
            {ids: [
                "eUWyR-RybB2fphJsnkfEXg",
                "OwStgrmev1PGz5suX0hxrA",
                "hfE97b3lg7a7pcqJPB-aNQ",
                "MpFhTRKvKWA-io6Mmm3ndg",
                "iKqtbRiYulV14gNB_042Ow",
            ]}
        ] 
    
    default:
        return "Error in Outdoor Stores Action"
    }
}

// get urls of stores to fetch
const getUrls = (data) => {
    let urlsArray = []
    for (let element of data) {
        for (let id of element.ids)
            urlsArray.push(process.env.REACT_APP_API_URL + `/api/v1/get_outdoor_stores/?id=${id}`)
        }
    return urlsArray
}

// Map over the urls, do a fetch request for each
export const getOutdoorStores = (city) => {
    const storeIds = getStoreIds(city)
    const urls = getUrls(storeIds)

    return async dispatch => {
        let storeData = await Promise.all (
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
        dispatch(setOutdoorStores(storeData))
  }
  
}
