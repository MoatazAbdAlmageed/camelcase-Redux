import React, {Component} from 'react';


const BookListItem = ({book})=>{

    return (
    <div className="BookList">
        <li key={book.id}>{book.name}</li>
    </div>
)
}
export default BookListItem;
