import React from 'react';
import store from '../store';
import actions from '../actions'
import './BookListItem.css';

const BookListItem = ({book}) => {

    return (
        <div className="BookListItem">
            <div className="card" onClick={() => {
                store.dispatch(actions.selectBookAction(book))

            }}>
                <div className="card-body">
                    <h5 className="card-title">
                        <div>{book.name}</div>
                    </h5>
                </div>
            </div>
        </div>
    )
};


export default BookListItem
