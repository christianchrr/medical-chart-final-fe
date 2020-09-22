import React from 'react';
import './App.css';
import Patient from './Components/Patient'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/Tools/Navbar';
import Medication from './Components/Medication';

const App = () => {
  return (
    <div className="App">
      <h2>Patient and Medication Charts</h2>
      <br/>
      <Router>
        <NavBar />
        <br/>
        <Route path="/patients" component={Patient} />
        <Route path="/medications" component={Medication} />
      </Router>
    </div>
  );
}

export default App;
