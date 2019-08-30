export const updateBookcaseForm = (name, value) => {
    return {
        type: "UPDATE_BOOKCASE_FORM",
        formData: { name, value }
    }
}

export const resetBookcaseForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}

export const addBookcase = bookcase => {
    return {
        type: "ADD_BOOKCASE",
        bookcase
    }
}

export const buildBookcase = bookcaseData => {
    return dispatch => {
        const sendableBookcaseData = {
            bookcase: {
                name: bookcaseData.name  
            }
        }
        return fetch("http://localhost:3001/api/v1/bookcases", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableBookcaseData)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else { dispatch(addBookcase(response.data) )}
        })
    }
}