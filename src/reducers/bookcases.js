export default (state = {bookcases: []}, action) => {
    switch(action.type) {
        case "SET_MY_BOOKCASES":
            return action.bookcases
        case "ADD_BOOKCASE":
            return state.concat(action.bookcase)
        case "ADD_BOOK": 
            let bookcases = state.map(bookcase => {
                if (bookcase.id === action.payload.id) {
                    return action.payload
                } else {
                    return bookcase
                }
            })
            return {...state, bookcases: bookcases}            
        default: 
            return state
    }
}