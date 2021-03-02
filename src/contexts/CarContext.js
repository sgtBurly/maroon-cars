import { createContext, useState, useEffect } from 'react'
// import data from '../json/cars.json'

export const CarContext = createContext();

const CarContextProvider = (props) => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);

  const values = {
    cars
  }

  return (
    <CarContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default CarContextProvider;