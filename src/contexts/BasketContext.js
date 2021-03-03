import React, { useState, createContext} from 'react';

export const BasketContext = createContext();

export const BasketProvider = (props) => {

    // The cart holding the array with the "saved" cars
    const [customerBasket, setCostumerBasket] = useState([]);

    // method to call by the "add to cart"-buttons
    const addToBasket = car => {
        console.log('This was added to your cart: ', car)
        setCostumerBasket(prevState => [car, ...prevState]);
    }

    const values = {
        customerBasket,
        addToBasket
    }

return (
    <BasketContext.Provider value = {values}>
        {props.children}
    </BasketContext.Provider>
)
}

export default BasketProvider;
