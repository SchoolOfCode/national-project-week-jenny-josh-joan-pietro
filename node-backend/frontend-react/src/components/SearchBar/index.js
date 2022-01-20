// import e from "express";
// import res from "express/lib/response";
import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ submitSearch, handleChange, handleClick, text }) {
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
      </form>
    </div>
  );
}
export default SearchBar;
