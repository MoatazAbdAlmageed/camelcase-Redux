import React from 'react';
import './App.css';
import BookList from './components/bookList.component';
import BookDetailed from "./components/bookDetailed.component";

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <BookList />
                    </div>
                    <div className="col-sm-8">
                        <BookDetailed/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App;
