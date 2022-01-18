import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';

import './App.css';

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
    </div>
  );
}

export default App;
