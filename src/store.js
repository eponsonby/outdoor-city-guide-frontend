import usersReducer from './reducers/users'
import currentUserReducer from './reducers/currentUser'
import citiesReducer from './reducers/cities'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    cities: citiesReducer
})


export default reducer