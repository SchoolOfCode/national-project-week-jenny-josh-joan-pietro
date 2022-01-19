import React from "react";
 import Sidebar from "../Sidebar";
 import SearchBar from "../SearchBar";
 import List from "../List"
 import './Home.css'


function Home() {
    return (
      <>
        
        <div>
          <h1 className="title-page">BOOTCAMPER HELPER</h1>
          <p className="intro-paragraph">Search all info about your favourite topic</p>
          <SearchBar /> 
        </div>
        
        <div className="main-section">
          <Sidebar />   
        </div>
        <List />
          
      </>
    );
  }

  export default Home;