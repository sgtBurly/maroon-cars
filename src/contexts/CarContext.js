import { createContext, useState, useEffect } from 'react'
export const CarContext = createContext();

const CarContextProvider = (props) => {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);

      //Filter all the cars function that runs on form-submit
      let filteredCars;
      const filterCars = () => {
      let minPrice = 299379;
      let maxPrice = 300000;
      let minMiles = 12326;
      let maxMiles = 13000;
      let minYear = 2005;
      let maxYear = 2008;
      // let filterModel = "";
      // let filterMake =  ""
      
      //Add the cars that are pass the filtration process
      filteredCars = cars.filter(car => car.price >= minPrice && 
      car.price <= maxPrice && car.miles >= minMiles &&
      car.miles <= maxMiles && car.year >= minYear && 
      car.year <= maxYear);
      // car.make === filterMake || car.make === "" &&
      // car.model === filterModel || car.model === "")
      }

      useEffect(() => {
        filterCars();
        console.log("This is the filteredCars array:", filteredCars)
      }, [cars])
      
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