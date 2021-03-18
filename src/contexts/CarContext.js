import { createContext, useState, useEffect } from 'react'
export const CarContext = createContext();

const CarContextProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [makesAndModels, setMakesAndModels] = useState([]);
  const [filteredCars, setfilteredCars] = useState([]);

  useEffect(() => {
    if (cars) setfilteredCars(cars); 
  }, [cars])

  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);


  //The function used in SearchComponent to send search data to CarContext
  //Search data is sent as props
  const sendSearchData = (filterOptions) => {
    filterCars(filterOptions.price, filterOptions.miles, filterOptions.year);
    console.log("search function in CarContext");
    console.log("Props in search func :", filterOptions);
  }

    //Filter all the cars function that runs on form-submit
    // let filteredCars = [];

    const filterCars = (price, miles, year) => {

      let minPrice = price[0];
      let maxPrice = price[1]; 
      let minMiles = miles[0];
      let maxMiles = miles[1];
      let minYear = year[0];
      let maxYear = year[1];
           
      // // let filterModel = "";
      // let filterMake =  ""
      //Add the cars that are pass the filtration process
      
      const searchResult = cars.filter(car => car.price >= minPrice &&
      car.price <= maxPrice && car.miles >= minMiles &&
      car.miles <= maxMiles && car.year >= minYear &&
      car.year <= maxYear);
      // car.make === filterMake || car.make === "" &&
      // car.model === filterModel || car.model === "")
      console.log("This is NEW filteredCars: ")
      console.log(searchResult)
      setfilteredCars(searchResult);
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

  // useEffect(() => {
  //   console.log("This is the filteredCars array, from filters:", filteredCars)
  //   console.log(filteredCars)
  // }, [filterCars])

  useEffect(() => {
    // To find every unique make in cars, uses Set.
    const makes = new Set();
    cars.forEach(car => makes.add(car.make));
    const makesArray = Array.from(makes).sort()

    const modelsArray = [];
    makesArray.forEach( make => {
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
    sendSearchData,
    filterCars,
    filteredCars
  }

  return (
    <CarContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default CarContextProvider;