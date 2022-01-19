import React from 'react'
import {
    Link
  } from "react-router-dom";

function Navbar() {





    return (
        <div className=' navigation-bar container'>
            <nav class="navbar navbar-light bg-light border border-primary">
              <form class="container-fluid justify-content-start">
                <button class="btn btn-outline-primary me-5" type="button"><Link to="/">Home</Link></button>
                <button class="btn btn-outline-primary me-5" type="button"><Link to="/create">Create Page</Link></button>
              </form>
            </nav>
            
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Page</Link>
            </li>
            
          </ul> */}
        </div>
    )
}

export default Navbar
