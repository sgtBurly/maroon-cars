import CarContextProvider from "./contexts/CarContext";
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar.js';
import OrderReceipt from './pages/OrderReceipt';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer.js';
import BasketProvider from './contexts/BasketContext.js';
import PaymentPage from "./pages/PaymentPage";


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
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/paymentPage">
            <PaymentPage />
          </Route>
          <Route exact path="/orderReceipt">
            <OrderReceipt />
          </Route>
      </CarContextProvider>
        </BasketProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
