import React, {useState} from "react";
 import Sidebar from "../Sidebar";
 import SearchBar from "../SearchBar";
 import SearchResult from "../SearchResult";
 import './Home.css'

function Home() {
  //searchbar
  const [searchResults, setSearchResults] = useState([])
  const [text, setText] = useState("");
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
  //sidebar
  // const [topicSearchResults, setTopicSearchResults] = useState([])

    async function searchByTopic(e) {
      e.preventDefault();
      let topic = e.target.id;
      let response = await fetch(`/api/resources?topic=${topic}`);
        let data = await response.json();
      console.log(data.payload);
        setSearchResults(data.payload);
    }

    return (
      <div>
        <h1 className="title-page">BOOTCAMPER HELPER</h1>
        <p className="intro-paragraph">
          Search all info about your favourite topic
        </p>
        <div className="searchSection">
          <Sidebar searchByTopic={searchByTopic} className="sideBar" />
          <SearchBar
            searchResults={searchResults}
            submitSearch={submitSearch}
            className="searchBar"
            handleChange={handleChange}
            text={text}
          />
          {searchResults && (
            <SearchResult searchResults={searchResults} className="searchResults" />
          )}
        </div>
      </div>
    );
  }

  export default Home;