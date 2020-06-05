/// BASIC IMPORTS
import React from 'react';

/// COMPONENTS
import Header from "./components/Header";
import Aside from "./components/Aside";
import Test from "./components/Test";

/// STYLING
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Aside />
        <Test />
      </main>
    </div>
  );
}

export default App;
