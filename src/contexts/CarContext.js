import { createContext, useState, useEffect } from 'react'
export const CarContext = createContext();

const CarContextProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [makesAndModels, setMakesAndModels] = useState([]);
  //const [filteredCars, setfilteredCars] = useState([]);

  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);


  //The function used in SearchComponent to send search data to CarContext
  //Search data is sent as props
  const sendSearchData = (props) => {
    console.log("search function in CarContext");
    console.log("Props in search func :", props);
  }

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

  const searchWord = 'VOLVO';

  const filterTextInput = (array, searchInput) => {
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

  let filteredCarsSearch;

  useEffect( () => {
    filteredCarsSearch = filterTextInput(cars, searchWord)
    console.log('In useEffect, filtered from textsearch: ', filteredCarsSearch);
  }, [cars]);

  useEffect(() => {
    filterCars();
    console.log("This is the filteredCars array, from filters:", filteredCars)
  }, [cars])

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
    sendSearchData
  }

  return (
    <CarContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default CarContextProvider;