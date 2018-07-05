export const SELECT_BOOK = "SELECT_BOOK";
export default function selectBookAction(books) {
    return {type: SELECT_BOOK, payload: books};
}
