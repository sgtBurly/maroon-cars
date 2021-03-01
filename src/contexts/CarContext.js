import { createContext } from 'react'

export const CarContext = createContext();

const CarContextProvider = (props) => {


  const values = {

  }

  return (
    <CarContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default CarContextProvider;