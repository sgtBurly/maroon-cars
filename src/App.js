import React from 'react';
import { BasketProvider } from './contexts/BasketContext';
import Home from './pages/Home';
import About from './pages/About';
import PaymentPage from "./pages/PaymentPage"

function App() {
  return(
      <div className="App">
        <BasketProvider>
          <Home />
          <About />
    <PaymentPage />
        </BasketProvider>
      </div>
  )
}

export default App;
