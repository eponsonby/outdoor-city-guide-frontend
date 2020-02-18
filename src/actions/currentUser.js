// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user: user
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
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log("errors"))
    }
}