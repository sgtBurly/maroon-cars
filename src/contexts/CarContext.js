import { createContext, useState, useEffect } from 'react'

export const CarContext = createContext();

const CarContextProvider = (props) => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(require("../json/cars.json"));
  }, []);


  //The function used in SearchComponent to send search data to CarContext
  //Search data is sent as props
  const sendSearchData = (props) => {
    console.log("search function in CarContext");
    console.log("Props in search func :", props);
  }

  const values = {
    cars,
    sendSearchData
  }

  return (
    <CarContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default CarContextProvider;