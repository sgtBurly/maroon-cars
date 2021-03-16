import { createContext, useState, useEffect, useContext } from 'react'
import { CarContext } from './CarContext';

export const FilteredContext = createContext();

const FilteredContextProvider = (props) => {
  // const { filteredCars, setFilteredCars } = useState([]);
  const { cars } = useContext(CarContext);
  
    //Filter all the cars function that runs on form-submit
    const filterCars = () => {
    let minPrice = 299379;
    let maxPrice = 300000;
    let minMiles = 12326;
    let maxMiles = 13000;
    let minYear = 2005;
    let maxYear = 2008;
    let filterModel = "";
    let filterMake =  ""
    
    //Add the cars that are pass the filtration process
 

        filteredCars = cars.filter(car => car.price >= minPrice && 
          car.price <= maxPrice && car.miles >= minMiles &&
          car.miles <= maxMiles && car.year >= minYear && 
          car.year <= maxYear);
        // car.make === filterMake || car.make === "" &&
        // car.model === filterModel || car.model === "")
       
        }
    //filterCars();

    useEffect(() => {
        console.log("This is the filteredCars array:")
        filterCars();
      }, [cars])
      const values = {
        cars
      }
    
  return (
    <FilteredContext.Provider value={ values }>
      { props.children }
    </FilteredContext.Provider>
  );
}

export default FilteredContextProvider;