import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar.js'
import { BrowserRouter, Route } from 'react-router-dom'
import BasketProvider from './contexts/BasketContext.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BasketProvider>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </BasketProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
