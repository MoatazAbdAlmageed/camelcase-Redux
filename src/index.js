import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import store from './store';
import actions from './actions'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import books from './data/books'
store.dispatch(actions.listBooksAction(books))
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)