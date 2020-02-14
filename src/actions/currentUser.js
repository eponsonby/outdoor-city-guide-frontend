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
        return fetch('https://localhost:3001', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify({username: "erin", password: "password"})

        })
    }
}