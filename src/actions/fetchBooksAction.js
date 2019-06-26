
const LIST_BOOKS = "LIST_BOOKS";
const fetchBooksAction = () => {

     /* TODO CLEAN UP THIS FILE */
    const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001';
    var books;
    console.log(api);
    let token = localStorage.token

    if (!token)
        token = localStorage.token = Math.random().toString(36).substr(-8)

    const headers = {
        'Accept': 'application/json',
        'Authorization': token
    }

    fetch(`${api}/contacts`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            console.log(data.contacts);
           var books = data.contacts;
        })

    return {type: LIST_BOOKS, payload: books};

};
export default fetchBooksAction
