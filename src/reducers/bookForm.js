const initialState= {
    title: "",
    author: "",
    pageCount: "",
    spineColor: "",
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BOOK_FORM':
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case 'RESET_BOOK_FORM':
            return initialState
        default:
            return state
    }
}