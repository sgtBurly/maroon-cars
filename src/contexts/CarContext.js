import { createContext, useState, useEffect } from 'react'

export const CarContext = createContext();

const CarContextProvider = (props) => {

  const [cars, setCars] = useState([]);
  const [makesAndModels, setMakesAndModels] = useState([]);

  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);

  useEffect()
  const makes = new Set();
  cars.forEach(car => makes.add(car.make));
  const makesArray = Array.from(makes);
  console.log('makesarray: ', makesArray);

  const modelsArray = [];
  makesArray.forEach( make => {
   modelsArray.push({make: make, models: []});
  })

  cars.forEach((car) => {
    modelsArray.forEach((obj) => {
      if(car.make === obj.make) {
        obj.models.push(car.model)
      }
    })
  })
  console.log('modelsArray', modelsArray)

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