import CarContextProvider from "./contexts/CarContext";
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <div className="App">
      <CarContextProvider>
      <Home />
      </CarContextProvider>
      <About />
    </div>);
}

export default App;
