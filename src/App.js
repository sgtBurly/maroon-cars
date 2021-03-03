import React from 'react';
import { BasketProvider } from './contexts/BasketContext';
import Home from './pages/Home';
import About from './pages/About';
import PaymentPage from "./pages/PaymentPage"
import Navbar from './components/Navbar.js'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return(
      <div className="App">
        <BasketProvider>
          <Home />
          <About />
          <PaymentPage />
          <BrowserRouter>
          <Navbar />
          </BrowserRouter>
        </BasketProvider>
      </div>
  )
}

export default App;
