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
  
  function handleSortBy(sortOrder) {
    if (sortOrder === "new to old") {
      setSearchResults([...searchResults].sort((a, b) => b.id - a.id));
    } else {
      setSearchResults([...searchResults].sort((a, b) => a.id - b.id));
    }
  }

  async function searchByTopic(e) {
        e.preventDefault();
        let topic = e.target.id;
        let response;
        if (topic === "See all resources") {
          response = await fetch(`/api/resources`);
        } else {
          response = await fetch(`/api/resources?topic=${topic}`);
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

                {searchResults.length === 0 && (
                  <div className="homeContent">
                    <h3>
                      Welcome to the Bootcamper Helper. Search for articles by topic or keyword.{" "}
                      <br></br>
                      <br></br>Feel free to upload any links you've found
                      helpful, just click on the "Share your resources" button
                      above.<br></br>
                      <br></br>
                    </h3>
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                      alt="School of Code logo"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      );
    }

export default Home;
