import React, { useState } from "react";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import SearchResult from "../SearchResult";
import "./Home.css";

function Home() {
  //searchbar
  const [searchResults, setSearchResults] = useState([]);
  const [text, setText] = useState("");
  async function submitSearch(e) {
    e.preventDefault();
    let response = await fetch(`/api/resources?keywords=${text}`);
    let data = await response.json();
    console.log(data.payload);
    if (data.payload.length === 0) {
      alert("No result please try again");
    } else {
      setSearchResults(data.payload);
      setText("");
    }
  }
  function handleChange(event) {
    setText(event);
  }
  //sidebar
  // const [topicSearchResults, setTopicSearchResults] = useState([])



  
 
  
  function handleSortBy(sortOrder) {
    if (sortOrder === "new to old") {
      setSearchResults([...searchResults].sort((a, b) => a.id - b.id));
    } else {
setSearchResults([...searchResults].sort((a, b) => b.id - a.id));

  async function searchByTopic(e) {
    e.preventDefault();
    let topic = e.target.id;
    let response;
    if (topic === "See all resources") {
      response = await fetch(`/api/resources`);
    } else {
      response = await fetch(`/api/resources?topic=${topic}`);

    }
  }

    let data = await response.json();
    console.log(data.payload);
    setSearchResults(data.payload);
  }
  //most recent articles
  async function handleClick(e) {
    e.preventDefault();
    let response = await fetch(`/api/resources?limits=9`);
    let data = await response.json();
    console.log("i'm making a recent articles search");
    console.log(data.payload);
    setSearchResults(data.payload);
  }

  return (
    <>
      <div>
        <div className="sideBar-mainContent">
          <Sidebar searchByTopic={searchByTopic} className="sideBar" />

          <div className="maincontent">
            <h1 className="title-page">BOOTCAMPER HELPER</h1>
            <SearchBar
              searchResults={searchResults}
              submitSearch={submitSearch}
              className="searchBar"
              handleChange={handleChange}
              text={text}
              handleClick={handleClick}

              handleSortBy={handleSortBy}
      
        

            />

            {searchResults && (
              <SearchResult
                searchResults={searchResults}
                submitSearch={submitSearch}
                handleChange={handleChange}
                text={text}
                handleClick={handleClick}
                className="searchResults"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
