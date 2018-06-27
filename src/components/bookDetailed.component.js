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


            <div className="card card-info" >
            <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                <p className="card-text">By <span className="badge badge-dark">{book.author}</span></p>
                <p>
                    Pages <span className="badge badge-info">{book.pages_i}</span>
                    Price <span className="badge badge-primary">${book.price}</span>
                </p>
                <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
        </div>
    </div>
    )
}
export default BookDetailed;
