import React, { Component } from 'react';

class BookShelf extends Component {

    render(){

        return (

            <div className="list-books-content">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className = "book-shelf-books">
                    <ol className = "books-grid">
                        {
                            // for each book, list item.. 
                            // this.props.books.map
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;