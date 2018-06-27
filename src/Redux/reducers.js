import { combineReducers } from 'redux'

const listBooks = (state, action)=> {
    // switch here
}
​


const selctedBook = (state, action)=> {
    // switch here
}



const bookApp = combineReducers({
    listBooks,
    selctedBook
})
​
export default bookApp