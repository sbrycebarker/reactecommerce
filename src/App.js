import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js'
import Landing from './components/landing/Landing.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Landing />
      </header>
    </div>
  );
}

export default App;
