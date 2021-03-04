import CarContextProvider from "./contexts/CarContext";
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer.js'
import BasketProvider from './contexts/BasketContext.js';
import Details from './pages/Details'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BasketProvider>
          <CarContextProvider>
            <Navbar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/details/:vin" component={Details} />
            <Route exact path="/about">
              <About />
            </Route>
          <PaymentPage />
          </CarContextProvider>
        </BasketProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
