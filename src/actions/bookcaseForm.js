export const updateBookcaseForm = (formData) => {
    return {
        type: "UPDATE_BOOKCASE_FORM",
        formData
    }
}

export const resetBookcaseForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}