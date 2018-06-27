import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = function(state){

    return {
        book: state.selectedBookReducer.book,
    }
}
//
// const mapDispatchToProps = function (dispatch) {
//
//     return bindActionCreators({
//         getSomething: actionCreators.getSomething,
//     }, dispatch)
// }
//


const  BookDetailed =  ({book}) => {

    return (
        <div className="BookDetailed">

            <div className="card card-info">
                {book &&
                <div className="card-body">


                    <h5 className="card-title">{book.name}</h5>
                    <p className="card-text">By <span className="badge badge-dark">{book.author}</span></p>
                    <p>
                        Pages <span className="badge badge-info">{book.pages_i}</span>
                        Price <span className="badge badge-primary">${book.price}</span>
                    </p>
                    <a href="#" className="btn btn-primary">Buy Now</a>

                </div>
                }
            </div>
            </div>

    )
}


export default connect(mapStateToProps)(BookDetailed)

