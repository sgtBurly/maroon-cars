import { createContext, useState, useEffect } from 'react'

export const FilteredContext = createContext();

const FilteredContextProvider = (props) => {

  
  return (
    <FilteredContext.Provider value={ values }>
      { props.children }
    </CarContext.Provider>
  );
}

export default FilteredContextProvider;