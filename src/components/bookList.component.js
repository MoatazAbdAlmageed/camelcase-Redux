import React from "react";
import BookListItem from "./bookListItem.component";
import {connect} from "react-redux";
import actions from '../actions'
import {bindActionCreators} from 'redux'

class BookList extends React.Component {
    componentDidMount() {
        this.props.fetchBooksAction();
    }

    render() {
        if (!this.props.books) {
            return <p>Loading</p>
        }
        return <div className="BookList">
            <h1 className={'white'}>Available books</h1>
            {this.props.books.map((book) => {
                return <BookListItem key={book.id} book={book}/>
            })}
        </div>
    }
}


const mapStateToProps = (state) => {

    return {
        books: state.booksList.books,
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



