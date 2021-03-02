import Navbar from './components/Navbar.js'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
