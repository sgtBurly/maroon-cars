import React, { useState, createContext} from 'react';

export const BasketContext = createContext();

export const BasketProvider = (props) => {

    const [userData, setUserData] = useState({

    });

    const handleUserData = (props) => {
        setUserData("Name: ", props.FirstName);
        console.log("This is user Data : ", userData);   
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
