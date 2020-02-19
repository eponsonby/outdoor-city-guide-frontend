import usersReducer from './reducers/users'
import currentUserReducer from './reducers/currentUser'
import citiesReducer from './reducers/cities'
import signupFormReducer from './reducers/signupForm'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    cities: citiesReducer,
    signupForm: signupFormReducer
})


export default reducer