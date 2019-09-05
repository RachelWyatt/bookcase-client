export default (state = {bookcases: []}, action) => {
    switch(action.type) {
        case "SET_MY_BOOKCASES":
            return action.bookcases
        case "ADD_BOOKCASE":
            return state.concat(action.bookcase)
        case "ADD_BOOK": 
            
            return state.myBookcases.concat(action.book)        
        default: 
            return state
    }
}