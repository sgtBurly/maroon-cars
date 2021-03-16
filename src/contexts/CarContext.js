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

  const searchWord = "2006";

  const filterTextInput = (searchInput) => {
    console.log('Before filtering', filteredCars)

    const tempArray =  filteredCars.filter(obj => Object.keys(obj).some(key => key === 'year' || key === 'miles' || key === 'price' || key === 'discount' ? obj[key].toString().includes(searchInput) : obj[key].includes(searchInput)));
    //const tempArray =  filteredCars.filter(obj => obj['miles'].toString().includes(searchInput));

    console.log('In filterTextInput:', tempArray);

    setfilteredCars(tempArray);
  }

  useEffect( () => {
    if(filteredCars) {
      filterTextInput(searchWord);
    }
  }, [filteredCars] )


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