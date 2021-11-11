import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";

const url = 'http://localhost:8000/';
function App() {
  const [temp, getTemp] = useState('default');

  useEffect(()=> {
    getTempData();
  }, []);

  const getTempData = () => {
    axios.get(`${url}getTemp`)
    .then((response) =>  {
      getTemp(response.data.temp);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloads. {temp}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
