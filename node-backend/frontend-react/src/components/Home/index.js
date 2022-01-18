import React from "react";
 import {Link} from "react-router-dom";
 import Sidebar from "../Sidebar";
 import SearchBar from "../SearchBar";

function Home() {
    return (
      <>
      <Sidebar />

        <h1>BOOTCAMPER HELPER</h1>
        <p>Search all info about your favourite topic</p>
        <SearchBar />     
      </>
    );
  }

  export default Home;