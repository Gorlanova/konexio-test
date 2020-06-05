/// BASIC IMPORTS
import React from 'react';
import { Route, Switch } from "react-router-dom";

/// PAGES & COMPONENTS
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

import Header from "./components/Header";

/// STYLING
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <main className="main flexcol">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
