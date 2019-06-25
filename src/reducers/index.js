import combineReducers from "redux/src/combineReducers";

import booksList from "./listBooksReducer"
import selectedBook from "./selectedBookReducer";

export default combineReducers({
    booksList,
    selectedBook,
})