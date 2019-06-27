export default function ListBooksReducer(state = [], action) {
debugger
    switch (action.type) {
        case "LIST_BOOKS":
            return {
                ...state,
                books: action.payload
            };
        // return {books: action.payload.filter((book) => (book.id !== "978-0641723445"))} // with filter
        default:
            return state
    }

}


