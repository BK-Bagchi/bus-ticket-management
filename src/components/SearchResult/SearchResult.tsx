import React from 'react';
import './SearchResult.css'
import Bus from './Bus';
import searchData from './searchData';

const SearchResult = () => {
    console.log(searchData);
    return (
        <section className="search-result">
            <Bus />
        </section>
    );
};

export default SearchResult;