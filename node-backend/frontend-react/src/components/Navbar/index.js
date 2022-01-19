import React from 'react'
import { Link} from "react-router-dom";
import './Navbar.css'


function Navbar() {


    return (
      <> 
        <div class="topnav">
        <form class="container-fluid justify-content-start">
          <a class="active" href="#news"><Link to="/">Home</Link></a>
          <a class="active" href="#home"><Link to="/create">Create Page</Link></a>
        </form>
        </div>
       </>
    )
}

export default Navbar
