// import e from "express";
// import res from "express/lib/response";
import React, { useState } from "react";
import "./SearchBar.css";


function SearchBar({submitSearch, handleChange, handleClick, text, handleSortBy}) {



  return (
    <div className="search-button border border-primary">
      <form onSubmit={submitSearch}>
        <input
          className="input-search"
          type="text"
          required
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by keywords"
        />
        <button
          className="input-search-button border border-primary"
          type="submit"
        >
          Search
        </button>
        <button
          className="input-search-button border border-primary"
          onClick={handleClick}
        >
          Most Recent Articles
        </button>

        
          <label className="text form-label " for="topic">
            Sort by:
          </label>
          <select
            className="itemDrop border border-primary"
            name="sortby"
            id="sortby"
            onChange={(e) => handleSortBy(e.target.value)}
          >
            <option value="old to new">old to new</option>
            <option value="new to old">new to old</option>
          </select>
        

      </form>
    </div>
  );
}
export default SearchBar;
