import React, { Component } from 'react';

class BookShelf extends Component {

    render(){

        const shelf = this.props.shelf;

        return (

            <li>
                <h2 className="bookshelf-title">{ shelf }</h2>
            </li>
        )
    }
}

export default BookShelf;