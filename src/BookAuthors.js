import React, { Component } from 'react';

class BookAuthors extends Component {

    render(){

        const book = this.props.book;
        
        return (

            book.authors.map(author => (
                <div 
                    className="book-authors"
                    key = { author }
                >
                    { author }
                </div>
            ))
        )
    }
}

export default BookAuthors;