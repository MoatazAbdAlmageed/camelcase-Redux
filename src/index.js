import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import bookApp from './Redux/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'




const store = createStore(bookApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)