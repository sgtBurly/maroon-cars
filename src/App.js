import React from 'react';
import { BasketProvider } from './contexts/BasketContext';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    < BasketProvider>
      <div className="App">
      <Home />
      <About />
      </div>
    </BasketProvider>
  );
}

export default App;
