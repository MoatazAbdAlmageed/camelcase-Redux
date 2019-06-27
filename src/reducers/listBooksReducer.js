export default function selectedBookReducer(state = [], action) {

    switch (action.type) {
        case "LIST_BOOKS":
            return {books: action.payload}
        default:
            return state
    }

}


