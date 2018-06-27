export const LIST_BOOKS = "LIST_BOOKS";
export default function listBooksAction(books) {
    return {type: LIST_BOOKS,payload: books};
}
