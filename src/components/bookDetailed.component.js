import React from "react";
import {connect} from "react-redux";

const mapStateToProps =  (state)=> {

    return {
        book: state.selectedBook.book,
    }
};


const BookDetailed = ({book}) => {

    return (
        <div className="BookDetailed">

            <div className="card card-info">
                {book ?
                    <div className="card-body">

                        <h5 className="card-title">{book.name}</h5>
                        <p className="card-text">By <span className="badge badge-dark">{book.author}</span></p>
                        <p>
                            Pages <span className="badge badge-info">{book.pages_i}</span>
                            Price <span className="badge badge-primary">${book.price}</span>
                        </p>
                        <a className="btn btn-primary">Buy Now</a>

                    </div>
                    : <p>No book selected</p>}

            </div>
        </div>

    )
};


export default connect(mapStateToProps)(BookDetailed)

