import React from 'react';
import { BasketProvider } from './contexts/BasketContext';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return(
      <div className="App">
        <BasketProvider>
          <Home />
          <About />
        </BasketProvider>
      </div>
  )
}

export default App;
