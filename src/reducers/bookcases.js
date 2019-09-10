export default (state = [], action) => {
    switch(action.type) {
        case "SET_MY_BOOKCASES":
            return action.bookcases
        case "ADD_BOOKCASE":
            return  [...state, action.bookcase]
        case "ADD_BOOK": 
        //iterate through all bookcases I have, and replace bookcase ID that matches

            return state.map(b => b.id === action.book.id ? action.book : b)
        default: 
            return state
    }
}