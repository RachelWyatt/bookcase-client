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