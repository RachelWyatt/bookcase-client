export const myBookcases = bookcases => {
    return {
        type: "SET_MY_BOOKCASES",
        bookcases
    }
}


export const getMyBookcases = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/bookcases", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(myBookcases(response.data))
            }
        })
    }
}