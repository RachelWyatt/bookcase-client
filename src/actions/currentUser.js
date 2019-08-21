export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

//async action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/v1/api/login"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({email: "dave@cat.com", password: "password"})
        }
    }
}