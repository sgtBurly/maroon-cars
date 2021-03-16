import { createContext, useState, useEffect } from 'react'

export const CarContext = createContext();

const CarContextProvider = (props) => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);

  const makes = new Set();
  cars.forEach(car => makes.add(car.make));
  console.log(makes);

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