import React, {useState} from "react";
 import Sidebar from "../Sidebar";
 import SearchBar from "../SearchBar";
 //import SearchResult from "../SearchResult";
 import './Home.css'

function Home() {
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
    return (
      <div>
        <h1 className="title-page">BOOTCAMPER HELPER</h1>
        <p className="intro-paragraph">
          Search all info about your favourite topic
        </p>
        <div className="searchSection">
          <Sidebar className="sideBar" />
          <SearchBar searchResults={searchResults} submitSearch={submitSearch} className="searchBar"  handleChange={handleChange} text={text}/>
          {/* <SearchResult /> */}
        </div>
      </div>
    );
  }

  export default Home;