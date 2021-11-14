// App.js
// Modified by: Alex Mei
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import './App.css';
import axios from 'axios';

import DefaultHomePage from './components/pages/DefaultHomePage';
import SummaryPage from './components/pages/SummaryPage';
import ErrorPage from './components/pages/ErrorPage';

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
    <main>
      <BrowserRouter>
        <Routes> 
          <Route path="/" exact element = {<DefaultHomePage/>}/> 
          <Route path="/summary" exact element = {<SummaryPage/>}/> 
          <Route path="/error" exact element = {<ErrorPage/>}/> 
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
