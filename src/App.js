
import './App.css';
import Login from './components/Login.js';
import {BrowserRouter as Router,Route} from "react-router-dom";
import React, { Component }  from 'react';


function App() {
  return (
    <div className="App">
      <Router>
             <Login/>
      </Router>
    </div>
  );
}

export default App;
