import React from "react";
 import Sidebar from "../Sidebar";
 import SearchBar from "../SearchBar";
 import './Home.css'

function Home() {
    return (
      <>
        

        <h1 className="title-page">BOOTCAMPER HELPER</h1>
        <p className="intro-paragraph">Search all info about your favourite topic</p>
        <Sidebar />
        <SearchBar />     
      </>
    );
  }

  export default Home;