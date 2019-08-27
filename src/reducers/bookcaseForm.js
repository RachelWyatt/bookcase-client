const initialState= {
    name: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BOOKCASE_FORM':
            return action.formData
        case 'RESET_BOOKCASE_FORM':
            return initialState
        default:
            return state
    }
}