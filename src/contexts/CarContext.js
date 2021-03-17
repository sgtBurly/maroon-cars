import { createContext, useState, useEffect } from 'react'

export const CarContext = createContext();

const CarContextProvider = (props) => {

  const [cars, setCars] = useState([]);
  const [makesAndModels, setMakesAndModels] = useState([]);

  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);

  useEffect(() => {
    // To find every unique make in cars, uses Set.
    const makes = new Set();
    cars.forEach(car => makes.add(car.make));

    const modelsArray = [];
    makes.forEach( make => {
      modelsArray.push({make: make, models: []});
    });

    // modelsArray now has a list of objects with a make-key/value and empty models-array. Below each model is added to the corresponding make.
    cars.forEach((car) => {
      modelsArray.forEach((obj) => {
        if(car.make === obj.make) {
          obj.models.push(car.model)
        }
      })
    })
    setMakesAndModels(modelsArray)
  },[cars]);

  const values = {
    cars,
    makesAndModels,
  }

  return (
    <CarContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default CarContextProvider;