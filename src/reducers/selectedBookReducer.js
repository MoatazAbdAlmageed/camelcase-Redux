export default function selectedBookReducer(state = {}, action) {

    switch (action.type) {
        case "SELECT_BOOK":
            return {book: action.payload};
        default:
            return state;
    }
}


