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
export const login = (credentials) => {
    return dispatch => {
        return fetch(process.env.REACT_APP_API_URL + "api/v1/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                'Accept': "application/json",
            },
            body: JSON.stringify(credentials),
            credentials: "include",
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getCities())
            }
        })
        .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch(process.env.REACT_APP_API_URL + 'api/v1/signup', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
             body: JSON.stringify(userInfo)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getCities())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}



export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch(process.env.REACT_APP_API_URL + 'api/v1/logout', {
            method: "DELETE",
        })

    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch(process.env.REACT_APP_API_URL + 'api/v1/get_current_user', {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getCities())
            }
        })
        .catch(console.log)
    }
}