import usersReducer from './reducers/users'
import currentUserReducer from './reducers/currentUser'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
})


export default reducer