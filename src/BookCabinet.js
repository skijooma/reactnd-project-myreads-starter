import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookCabinet extends Component {

    state = {
        
    }

    /**
     *  props object here (API call results)
     */

    render(){

        return (

            <div>
                <BookShelf books = { }/>
            </div>
        );
    }
}

export default BookCabinet;