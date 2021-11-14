// App.js
// Modified by: Alex Mei

// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact>
          <DefaultHomePage/>
        </Route>
        <Route path="/summary">
          <SummaryPage/>
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
