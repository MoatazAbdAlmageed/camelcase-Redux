export default function selectedBookReducer(state = [], action) {

    switch (action.type) {
        case "LIST_BOOKS":
            return {...state, books: action.payload};
            break;
        default:
            return state;
    }
}


