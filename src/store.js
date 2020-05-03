import currentUserReducer from './reducers/currentUser'
import citiesReducer from './reducers/cities'
import parksReducer from './reducers/parks'
import localParksReducer from './reducers/localParks'
import outdoorStoresReducer from './reducers/outdoorStores'
import climbingGymsReducer from './reducers/climbingGyms'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    currentUser: currentUserReducer,
    cities: citiesReducer,
    parks: parksReducer,
    localParks: localParksReducer,
    outdoorStores: outdoorStoresReducer,
    climbingGyms: climbingGymsReducer
})


export default reducer