import React, { Component } from 'react';
import BookControl from './BookControl';
import BookAuthors from './BookAuthors';

class Book extends Component {

    render(){

        const book = this.props.book;
        
        return (

            <li style = {{ marginBottom: 20 }}>
                <div className = "book">
                    <div 
                        className = "book-top"
                        style = {{ display: "inline-block" }}
                    >
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${ book.imageLinks.thumbnail })` }}></div>

                        <BookControl />
                        <div className="book-title">{ book.title }</div>
                        <BookAuthors book = { book }/>
                    </div>
                </div>
            </li>
        )
    }
}

export default Book;