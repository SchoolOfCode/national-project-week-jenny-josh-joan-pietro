import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SearchBar from '../SearchBar';

import './App.css';
import CreatePage from '../CreatePage';

function App() {

  const [data, setData] = useState(null);

useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreatePage />} />
      </Routes>
        
        <div>

        </div>
     
    </div>
  );
}

export default App;
