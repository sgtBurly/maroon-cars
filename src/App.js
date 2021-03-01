import React from 'react';
import { BasketProvider } from './contexts/BasketContext';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    
      <div className="App">
        < BasketProvider>
        </BasketProvider>
        <Home />
        <About />
      </div>  
}

export default App;
