export const updateBookForm = (name, value) => {
    return {
        type: "UPDATE_BOOK_FORM",
        formData: { name, value }
    }
}

export const resetBookForm = () => {
    return {
        type: "RESET_BOOK_FORM",
    }
}

export const addBook = book => {
    return {
        type: "ADD_BOOK",
        book
    }
}

export const createBook = (formData, bookcaseID, history) => {
    return dispatch => {
        debugger
        const sendableBookData = {
            title: formData.title,
            author: formData.author,
            page_count: formData.pageCount,
            spine_color: formData.spineColor,
            bookcase_id: formData.bookcaseID   
            
        }
        return fetch(`http://localhost:3001/api/v1/bookcases/${bookcaseID}/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableBookData)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else { 
                console.log(response)
                dispatch(createBook(response.data))
                history.push(`/bookcases/${bookcaseID}`)
        }
        })
    }
}