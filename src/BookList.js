import React, { Component } from 'react';
import BookShelf from './BookShelf';
import Book from './Book';

class BookList extends Component{

    render(){

        const rows = [];
        let lastShelf = null;
        let shelfName = '';

        this.props.books.map(book => {
            if (book.shelf !== lastShelf){

                if (book.shelf === "currentlyReading")
                    shelfName = "Currently Reading"
                if (book.shelf === "wantToRead")
                    shelfName = "Want to Read"
                if (book.shelf === "read")
                    shelfName = "Read"

                rows.push(
                    <BookShelf
                        shelf = { shelfName }
                        key = { book.shelf }
                    />
                );
            }

            rows.push(
                <Book 
                    book = { book }
                    key = { book.title }
                />
            );
            
            lastShelf = book.shelf;

            return rows;
            
        });

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <ol style = {{ listStyle: "none" }}>
                            { rows }
                        </ol>
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        );
    }
}

export default BookList;