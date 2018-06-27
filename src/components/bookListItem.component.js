import React, {Component} from 'react';
import store from '../store';
import actions from '../actions'

const  changeSelectedBook = (book)=>{
    store.dispatch(actions.selectBookAction(book))

}

const BookListItem =  ({book}) => {

    return (
    <div className="BookListItem">
        <div className="card" onClick={()=>{changeSelectedBook(book)}}>
            <div className="card-body">
                <h5  className="card-title">{book.name}</h5>
            </div>
        </div>
    </div>
    )
}


export default BookListItem
