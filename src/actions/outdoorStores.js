import { trackPromise } from 'react-promise-tracker'

export const setOutdoorStores = outdoorStores => {
    return {
        type: "SET_OUTDOOR_STORES",
        outdoorStores
    }
}

const getStoreIds = (city) => {
    switch (city) {
    // case "Boulder":
    //     return [{ids: ["250788", "252294", "250790"]}]
    case "Reno":
        return [
            {ids: [
                "GLbVRaeuuWLqj_Ef2La-kw",
                "pqW5dIZFoBsqA1LENQmOow",
                "HxJsDfVHTsx0081cvqguHw",
                "5QXQv1C7HDgMA38VYPrs5w",
                "PXgSimQeRau3PkaRplGFvw",
                "lpS1TedM7BR-r2DzeA2MYA",
                "KlipvAMuvybbCSjGvNmbmA",
                "EfylzvvNYBuYAYjSXZF0lw"
            ]},
        ]
    // case "Portland":
    //     return [
    //         {ids: ["1106", "1102"]},
    //     ]
    // case "Asheville":
    //     return [
    //         {ids: ["264802", "240530"]},
    //     ]
    // case "Salt Lake City":
    //     return [
    //         {ids: ["236556"]},
    //     ]
    default:
        return "Error in Outdoor Stores Action"
    }
}

const getUrls = (data) => {
    let urlsArray = []
    for (let element of data) {
        for (let ids of element.ids)
            urlsArray.push(process.env.REACT_APP_API_URL + `/api/v1/get_outdoor_stores/?id=${ids}`)
        }
    return urlsArray
}

export const getOutdoorStores = (outdoorStore) => {
    const storeData = getStoreIds(outdoorStore)
    const urls = getUrls(storeData)

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