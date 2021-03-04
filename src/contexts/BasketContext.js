import React, { useState, createContext} from 'react';

export const BasketContext = createContext();

export const BasketProvider = (props) => {
    // The cart holding the array with the "saved" cars
    const [customerBasket, setCostumerBasket] = useState([]);

    // method to call by the "add to cart"-buttons.
    // If the car is already in the customerBasket it is not added again and if the customerBasket is empty the car is always added. 
    const addToBasket = car => {
        const alreadyAdded = customerBasket ? customerBasket.find(item => item.vin === car.vin) : false;
        if (alreadyAdded) {
            console.log('The car is already added to your cart...');
        } else {
            console.log('This was added to your cart: ', car);
            setCostumerBasket(prevState => [car, ...prevState]);
        }
        console.log(customerBasket);
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
