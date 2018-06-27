import combineReducers from "redux/src/combineReducers";

import  listBooksReducer from "./listBooksReducer"
import selectedBookReducer from "./selectedBookReducer";
export  default  combineReducers({
    listBooksReducer,
    selectedBookReducer,
})