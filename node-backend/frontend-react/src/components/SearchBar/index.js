import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <>
        <div className='search-button'>
            <input className='input-search' type='text'/> 
            
            <i className='input-search-button fa fa-search w3-xlarge' type='button' value='Search'></i>
        </div>
        </>
    )
}

export default SearchBar
