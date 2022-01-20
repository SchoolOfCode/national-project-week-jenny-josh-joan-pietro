import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="topnav">
        <a className="navLogo" href="https://www.schoolofcode.co.uk/" >
          <img className="navLogoImg"
            width="60px"
            src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
            alt="school of code logo"
          />
        </a>
        <form className="container-fluid justify-content-start">
          <a className="active" href="#news">
            <Link to="/">Home</Link>
          </a>
          <a className="active" href="#home">
            <Link to="/create">Share your resources</Link>
          </a>
        </form>
      </div>
    </>
  );
}

export default Navbar;
