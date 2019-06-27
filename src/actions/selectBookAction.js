export const SELECT_BOOK = "SELECT_BOOK";
export default function selectBookAction(book) {
    return {type: SELECT_BOOK, payload: book};
}
