import { createContext, useState, useEffect } from 'react'

export const CarContext = createContext();

const CarContextProvider = (props) => {

  const [cars, setCars] = useState([]);
  //const [filteredCars, setfilteredCars] = useState([]);

  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);

  const searchWord = 'VOLVO';

  const filterTextInput = (array, searchInput) => {


    console.log('Before filtering', filteredCars)
    // For every object, get all keys for every object and search for the textInput from the user.
    // For values containing numbers/boolean need to be stringified using toString()
    // Comparing everything in lowercase letters with toLowerCase();
    const tempArray =  array.filter(obj => Object.keys(obj).some(key => key === 'year' || key === 'miles' || key === 'price' || key === 'discount' ? obj[key].toString().includes(searchInput.toLowerCase()) : obj[key].toLowerCase().includes(searchInput.toLowerCase())));

    console.log('In filterTextInput:', tempArray);
    if (tempArray.length !== 0) {
      return tempArray;
    } else {
      console.log('No search results...')
    }
  }

  let filteredCars = [];

  useEffect( () => {
      console.log('In useEffect: ', filterTextInput(cars,searchWord));
      filteredCars = filterTextInput(cars, searchWord)
  }, [cars])

  const values = {
    cars,
  }

  return (
    <CarContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default CarContextProvider;