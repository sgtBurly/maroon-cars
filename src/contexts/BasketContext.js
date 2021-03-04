import React, { useState, createContext} from 'react';

export const BasketContext = createContext();

export const BasketProvider = (props) => {
    // The cart holding the array with the "saved" cars
    const [customerBasket, setCostumerBasket] = useState([]);

    // method to call by the "add to cart"-buttons.

    const addToBasket = car => {
        // If the car is already in the customerBasket it is not added again but if the customerBasket is empty the car is always added.

        const alreadyAdded = customerBasket ? customerBasket.find(item => item.vin === car.vin) : false;
        if (alreadyAdded) {
            // Replace with toaster!
            console.log('From addToBasket in BasketContext: The car is already added to your cart...');
        } else {
            setCostumerBasket(prevState => [car, ...prevState]);

            // Replace with toaster!
            console.log('From addToBasket in BasketContext: This was added to your cart: ', car);
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
