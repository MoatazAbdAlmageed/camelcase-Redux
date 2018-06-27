import { createStore } from 'redux'
// import applyMiddleware from "redux/src/applyMiddleware";

import reducer from './reducers'
//
// const logger = (store)=>(next)=>(action)=>{
//     console.log(action);
//     next(action)
// }
// // const middleware = applyMiddleware(logger);

 // const store =  createStore(reducer,1,middleware)
const store =  createStore(reducer)


store.subscribe(()=>{

    console.log("Store changed", store.getState());
})

export default store
