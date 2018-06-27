import React, {Component} from 'react';


const BookListItem = ({book})=>{

    return (
    <div className="BookListItem">

        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
            </div>
        </div>
    </div>
    )
}
export default BookListItem;
