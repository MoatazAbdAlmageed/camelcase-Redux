
export default   function selectedBookReducer(state={}, action) {

    switch(action.type) {
        case "SELECT_BOOK":
            return {...state,book:action.payload};

            break;
        case false:
            // code block
            break;
        default:
            return state;
    }
}


