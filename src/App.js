import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/bookList.component';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <BookList/>

                    </div>
                    <div className="col-sm-9">


                    </div>

                </div>
                </div>
            </div>
        );
    }
}

export default App;
