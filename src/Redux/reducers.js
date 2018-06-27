import { combineReducers } from 'redux'

const listBooks = (state, action)=>{
    // switch here
    return {}
}


const selectedBook = (state, action)=> {
    // switch here
    return {}
}


const bookApp = combineReducers({
    listBooks,
    selectedBook
});
export default bookApp