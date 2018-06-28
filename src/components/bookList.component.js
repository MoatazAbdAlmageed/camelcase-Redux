import React from "react";
import BookListItem from "./bookListItem.component";
import {connect} from "react-redux";


const mapStateToProps = function (state) {
    return {
        books: state.listBooksReducer.books,
    }
}


const BookList = ({books}) => {
    return (
        <div className="BookList">
            {books.map((book) => {
                return <BookListItem key={book.id} book={book}/>
            })}
        </div>
    )
}

export default connect(mapStateToProps)(BookList)

