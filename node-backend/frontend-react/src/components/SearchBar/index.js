
// import e from "express";
// import res from "express/lib/response";
import React, { useState } from "react";
import './SearchBar.css'

function SearchBar() {
  const [text, setText] = useState("");

  const [searchResults, setSearchResults] = useState([])
  
  
  async function submitSearch(e) {
    e.preventDefault();
    let response = await fetch(`/api/resources?keywords=${text}`);
    let data = await response.json();
    console.log(data.payload);
    setSearchResults(data.payload);
    setText('')
  }

  function handleChange(event) {
    setText(event);
  }
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
      </form>
     
    </div>
  );
}
export default SearchBar;