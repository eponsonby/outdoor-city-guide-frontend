import { getCities } from "./cities"

// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
} 

// async action creators
export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/login', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: "DELETE",
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/get_current_user', {
            credentials: "include",    
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getCities())
            }
        })
        .catch(console.log)
    }
}