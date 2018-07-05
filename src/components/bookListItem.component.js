// import React from 'react';
// import store from '../store';
// import actions from '../actions'
// import {connect} from "react-redux";
// import bindActionCreators from "redux/src/bindActionCreators";
//
//
//
//
// const mapDispatchToProps = function (dispatch) {
//
//     // store.dispatch(actions.selectBookAction(book))
//
//     // now we will have a prop called 'selectBookAction' that when called,
//     // actions.selectBookAction will be called,
//     // and it's return will be passed through store to all reducers to update redux state.
//     return bindActionCreators({ selectBookAction: actions.selectBookAction }, dispatch)
// }
//
//
// const BookListItem = ({book}) => {
//
//     return (
//         <div className="BookListItem">
//             <div className="card" onClick={() => {
//                 mapDispatchToProps(book)
//
//             }}>
//                 <div className="card-body">
//                     <h5 className="card-title">{book.name}</h5>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
//
// export default connect(mapDispatchToProps)(BookListItem)
//



import React from 'react';
import store from '../store';
import actions from '../actions'

const BookListItem = ({book}) => {

    return (
        <div className="BookListItem">
            <div className="card" onClick={() => {
                store.dispatch(actions.selectBookAction(book))

            }}>
                <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                </div>
            </div>
        </div>
    )
}


export default BookListItem
