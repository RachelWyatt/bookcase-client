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

export const addBook = ({book}) => {
    return{
        type: "ADD_BOOK",
        book
    }
}


export const createBook = (formData) => {
    return dispatch => {
        const sendableBookData = {
            book: {
                title: formData.name,
                author: formData.author,
                page_count: formData.pageCount,
                spine_color: formData.spineColor, 
                bookcase_id: formData.bookcaseId  
            }
        }
        return fetch(`http://localhost:3001/api/v1/bookcases/${formData.bookcaseId}`, {
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
                dispatch(console.log(response.data))}
        })
    }
}