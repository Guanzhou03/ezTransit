import React from 'react';
import Home from './Components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { mrtStationNames, dummy, dummyParsed } from "./data.js";

function App() {
  return (
    <div className="App container mt-2 mb-3">
      <Home />
    </div>
  );
}

export default App;