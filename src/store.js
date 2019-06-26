import { createStore, applyMiddleware ,compose} from 'redux';
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}


const enhancer = window._s_REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer,enhancer(
//     applyMiddleware(...middlewares)
// ));
const store = createStore(reducer, /* preloadedState, */ enhancer(
    applyMiddleware(thunkMiddleware) // lets us dispatch() functions
));

/*subscribe*/
store.subscribe(() => {
    // console.log("Store changed", store.getState());
});

export default store
