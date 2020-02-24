import usersReducer from './reducers/users'
import currentUserReducer from './reducers/currentUser'
import citiesReducer from './reducers/cities'
import parksReducer from './reducers/parks'
import localParksReducer from './reducers/localParks'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    cities: citiesReducer,
    parks: parksReducer,
    localParks: localParksReducer
})


export default reducer