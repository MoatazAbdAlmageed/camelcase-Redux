export default function selectedBookReducer(state = [], action) {

    switch (action.type) {
        case "LIST_BOOKS":
            state= {...state, books: action.payload};
            break;
        default:
            return state;
    }

    return state
}


