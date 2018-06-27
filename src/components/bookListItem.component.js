import React, {Component} from 'react';


const BookListItem = ({book})=>{

    return (
    <div className="BookList">

        <div className="card" >
            <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                    <p className="card-text">{book.author}</p>
                <a href="#" className="btn btn-primary">Read</a>
                </div>
        </div>
    </div>
    )
}
export default BookListItem;
