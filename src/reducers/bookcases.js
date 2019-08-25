export default (state = [], action) => {
    switch(action.type) {
        case "SET_MY_BOOKCASES":
            return action.bookcases
        default: 
            return state
    }
}