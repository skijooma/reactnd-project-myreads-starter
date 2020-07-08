import React, { Component } from 'react';
import SearchBookResults from './SearchBookResults';
import SearchBar from './SearchBar';

class SearchArea extends Component {

    render(){

        return (

            <div className = "search-books">
                <SearchBar />
                <SearchBookResults />
            </div>
        )
    }
}

export default SearchArea;