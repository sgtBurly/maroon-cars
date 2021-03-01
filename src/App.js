import CarContextProvider from "./contexts/CarContext";
import { BasketProvider } from './contexts/BasketContext';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <div className="App">
    < BasketProvider>
      <CarContextProvider>
      <Home />
      </CarContextProvider>
      <About />
    </BasketProvider>
    </div>);
}

export default App;
