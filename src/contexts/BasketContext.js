import React, { useState, createContext} from 'react';

export const BasketContext = createContext();

export const BasketProvider = (props) => {


    const values = {

    }

return (
    <BasketContext.Provider value = {values}>
        {props.children}
    </BasketContext.Provider>
)
}

export default BasketProvider;
