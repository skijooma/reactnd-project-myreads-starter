import React, { Component } from 'react';
import SearchBookResults from './SearchBookResults';
import SearchBar from './SearchBar';

class SearchArea extends Component {

    constructor(filterText){
        super();
        this.filterText = ''
    }

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