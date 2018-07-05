import books from '../data/books'
const LIST_BOOKS = "LIST_BOOKS";
const  fetchBooksAction = () => {

    return {type: LIST_BOOKS,payload:books};
}
export default fetchBooksAction
