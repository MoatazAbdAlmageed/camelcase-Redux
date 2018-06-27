import React, {Component} from 'react';


const BookList = ()=>{

    const books = [
        {
            "id" : "978-0641723445",
            "cat" : ["book","hardcover"],
            "name" : "The Lightning Thief",
            "author" : "Rick Riordan",
            "series_t" : "Percy Jackson and the Olympians",
            "sequence_i" : 1,
            "genre_s" : "fantasy",
            "inStock" : true,
            "price" : 12.50,
            "pages_i" : 384
        }
        ,
        {
            "id" : "978-1423103349",
            "cat" : ["book","paperback"],
            "name" : "The Sea of Monsters",
            "author" : "Rick Riordan",
            "series_t" : "Percy Jackson and the Olympians",
            "sequence_i" : 2,
            "genre_s" : "fantasy",
            "inStock" : true,
            "price" : 6.49,
            "pages_i" : 304
        }
        ,
        {
            "id" : "978-1857995879",
            "cat" : ["book","paperback"],
            "name" : "Sophie's World : The Greek Philosophers",
            "author" : "Jostein Gaarder",
            "sequence_i" : 1,
            "genre_s" : "fantasy",
            "inStock" : true,
            "price" : 3.07,
            "pages_i" : 64
        }
        ,
        {
            "id" : "978-1933988177",
            "cat" : ["book","paperback"],
            "name" : "Lucene in Action, Second Edition",
            "author" : "Michael McCandless",
            "sequence_i" : 1,
            "genre_s" : "IT",
            "inStock" : true,
            "price" : 30.50,
            "pages_i" : 475
        }
    ]
    return (
    <div className="BookList">
        <ul>
        {books.map((book)=>{
            return <li key={book.id}>{book.name}</li>
        })}
        </ul>
    </div>
)
}
export default BookList;
