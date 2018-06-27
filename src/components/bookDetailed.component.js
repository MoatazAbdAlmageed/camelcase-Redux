import React, {Component} from 'react';


const BookDetailed = ()=>{
const book =  {
    "id" : "978-1933988177",
    "cat" : ["book","paperback"],
    "name" : "Lucene in Action, Second Edition",
    "author" : "Michael McCandless",
    "sequence_i" : 1,
    "genre_s" : "IT",
    "inStock" : true,
    "price" : 30.50,
    "pages_i" : 475
}
    return (
        <div className="BookDetailed">


            <div className="card" >
            <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                <p className="card-text">Author{book.author}</p>
                <p>pages : <span className="badge badge-info">{book.pages_i}</span></p>
                <p>Price <span className="badge badge-primary">{book.price}</span></p>
                <a href="#" className="btn btn-primary">Buy</a>
                </div>
        </div>
    </div>
    )
}
export default BookDetailed;
