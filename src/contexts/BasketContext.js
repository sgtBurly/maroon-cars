import React, { useState, createContext} from 'react';

export const BasketContext = createContext();

export const BasketProvider = (props) => {

    const userData = [

    ];

    const handleUserData = (props) => {
        userData.push(props);
        console.log("This is props : ", props);
        console.log("This is userData : ", userData); 
    };

    const values = {
        handleUserData,
        userData,
    }

return (
    <BasketContext.Provider value = {values}>
        {props.children}
    </BasketContext.Provider>
)
}

export default BasketProvider;
