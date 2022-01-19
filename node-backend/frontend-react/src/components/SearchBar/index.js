
// import e from "express";
// import res from "express/lib/response";
import React, { useState } from "react";
import './SearchBar.css'


function SearchBar({submitSearch, handleChange, handleClick, text}) {
  return (
    <div className='search-button'>
      <form onSubmit={submitSearch}>
        <input className='input-search'
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by keywords"
        />
        <button className='input-search-button' type="submit">Search</button>
        <button className='input-search-button' onClick={handleClick}>Most Recent Articles</button>
      </form>
     
    </div>
  );

}
export default SearchBar;