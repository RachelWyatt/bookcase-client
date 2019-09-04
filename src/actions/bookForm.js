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

export const addBook = (book, bookcaseId, history) => {
    return dispatch => {
        const sendableBookData = {
            book: {
                title: book.title,
                author: book.author,
                page_count: book.pageCount,
                spine_color: book.spineColor,   
            }
        }
        return fetch(`http://localhost:3001/api/v1/bookcases/${bookcaseId}/books`, {
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
                dispatch({
                    type: "ADD_BOOK",
                    payload: response
                })
        }
        })
    }
}