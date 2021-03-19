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
    if (filterOptions.reset === true) {
      setfilteredCars(cars)
      
    }
    else {
      filterCars(filterOptions);
      console.log("search function in CarContext");
      console.log("Props in search func :", filterOptions);
    }
  }
    //Filter all the cars function that runs on form-submit
    const filterCars = (filterOptions) => {
      const filterMake = cars.filter(car => filterOptions.make !== "" ? car.make === filterOptions.make : true);
      const filterModel = filterMake.filter(car => filterOptions.model !== "" ? car.model === filterOptions.model : true);
      let minPrice = filterOptions.price[0];
      let maxPrice = filterOptions.price[1];
      let minMiles = filterOptions.miles[0];
      let maxMiles = filterOptions.miles[1];
      let minYear = filterOptions.year[0];
      let maxYear = filterOptions.year[1];
      //Add the cars that are pass the filtration process
      const filterResult = filterModel.filter(car => car.price >= minPrice &&
      car.price <= maxPrice && car.miles >= minMiles &&
      car.miles <= maxMiles && car.year >= minYear &&
      car.year <= maxYear);
      // car.make === filterMake || car.make === "" &&
      // car.model === filterModel || car.model === "")
      console.log(filterResult)
      const searchResult = filterTextInput(filterResult, filterOptions.textSearch)
      setfilteredCars(searchResult);
    }

  const filterTextInput = (array, searchInput) => {
    // For every object, get all keys for every object and search for the textInput from the user.
    // For values containing numbers/boolean need to be stringified using toString()
    // Comparing everything in lowercase letters with toLowerCase();
    // If no searchInput return original array
    if (searchInput === "") {
      return array
    }
    const tempArray =  array.filter(obj => Object.keys(obj).some(key => key === 'year' || key === 'miles' || key === 'price' || key === 'discount' ? obj[key].toString().includes(searchInput.toLowerCase()) : obj[key].toLowerCase().includes(searchInput.toLowerCase())));
    if (tempArray.length !== 0) {
      return tempArray;
    } else {
      // No search results. Maybe use variable to show different component in that case?
      console.log('No search results...')
      return []
    }
  }

  useEffect(() => {
    // To find every unique make in cars, uses Set.
    const makes = new Set();
    cars.forEach(car => makes.add(car.make));
    const makesArray = Array.from(makes).sort()
    const modelsArray = [];
    makesArray.forEach( make => {
      modelsArray.push({make: make, models: new Set()});
    });
    // modelsArray now has a list of objects with a make-key/value and empty models-Set (Set is used to avoid model duplicates). Below each model is added to the corresponding make.
    cars.forEach((car) => {
      modelsArray.forEach((obj) => {
        if(car.make === obj.make) {
          obj.models.add(car.model)
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