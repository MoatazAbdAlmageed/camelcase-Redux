import React from "react";
import BookListItem from "./bookListItem.component";
import {connect} from "react-redux";
import actions from '../actions'
import {bindActionCreators} from 'redux'

class BookList extends React.Component {
    componentDidMount() {
        this.props.fetchBooksAction();
    }


    renderList() {
        return this.props.books.map((book) => {
            return <BookListItem key={book.id} book={book}
                                 selected={this.props.selectedBook && this.props.selectedBook.id === book.id}/>
        })
    }

    render() {

        if (!this.props.books) {
            return <p>Loading</p>
        }
        return <div className="BookList">
            <h1 className={'white'}>Available books</h1>
            {this.renderList()}
        </div>
    }
}


const mapStateToProps = (state) => {

    return {
        books: state.booksList.books,
        selectedBook: state.selectedBook.book,
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            fetchBooksAction: () => dispatch(actions.fetchBooksAction()),
        },
        dispatch,
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)



