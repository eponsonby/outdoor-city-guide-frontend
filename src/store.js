import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users'
import currentUserReducer from './reducers/currentUser'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store