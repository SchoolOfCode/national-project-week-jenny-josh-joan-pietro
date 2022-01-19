import React from "react";
 import Sidebar from "../Sidebar";
 import SearchBar from "../SearchBar";
 import './Home.css'

function Home() {
    return (
      <div>
        <h1 className="title-page">BOOTCAMPER HELPER</h1>
        <p className="intro-paragraph">
          Search all info about your favourite topic
        </p>
        <div className="searchSection">
          <Sidebar className="sideBar" />
          <SearchBar className="searchBar" />
        </div>
      </div>
    );
  }

  export default Home;