import { createContext, useState, useEffect } from 'react'

export const CarContext = createContext();

const CarContextProvider = (props) => {

  const [cars, setCars] = useState([]);

  /* const initFilteredCars = () => {
    if(cars) {
      return cars
    } else {
      return []
    }
    //cars ? cars : []
  } */
  const [filteredCars, setfilteredCars] = useState([]);


  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);

  useEffect(() => {
    setfilteredCars(cars)
  }, [cars]);

  const searchWord = "volvo";

  const filterTextInput = searchInput => {
    //return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
  }


  const values = {
    cars,
    filteredCars
  }

  return (
    <CarContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default CarContextProvider;