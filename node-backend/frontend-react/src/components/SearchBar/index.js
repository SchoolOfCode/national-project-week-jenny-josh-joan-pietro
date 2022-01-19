import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className='search-button'>
            <input className='input-search' type='text'/> 
            <br/>
            <input className='input-search-button' type='button' value='Search'/>
        </div>
    )
}

export default SearchBar
