export default (state = [], action) => {
    switch(action.type) {
        case "SET_MY_BOOKCASES":
            return action.bookcases
        case "ADD_BOOKCASE":
            return state.concat(action.bookcase)            
        default: 
            return state
    }
}