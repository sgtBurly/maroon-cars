import React, { useState, createContext, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export const BasketContext = createContext();

export const BasketProvider = (props) => {

    // The cart holding the array with the "saved" cars
    const [customerBasket, setCustomerBasket] = useState([]);
    // The latest purchase made by a user. Updated by handlePurchase-func to be sent to Confirm-page
    const [latestPurchase, setLatestPurchase] = useState({});

    // method to call by the "add to cart"-buttons.
    const addToBasket = car => {
        // If the car is already in the customerBasket it is not added again but if the customerBasket is empty the car is always added.

        const alreadyAdded = customerBasket ? customerBasket.find(item => item.vin === car.vin) : false;
        if (alreadyAdded) {
            toast.error('The car is already in your cart!')
        } else {
            setCustomerBasket(prevState => [car, ...prevState]);
            toast.success('Successfully added to your cart!')
        }
    }

    const handlePurchase = (userData) => {
        // Save the userdata from PaymentForm and the cars in the customerBasket in latestPurchase variable.
        setLatestPurchase({
            userData,
            carsPurchased: [...customerBasket],
            timestamp: new Date()
        });

        //resets the customerBasket
        setCustomerBasket([]);
    }

    useEffect(()=> console.log(latestPurchase), [latestPurchase])

    //Func for calculating price in basket
    const calcBasket = (customerBasket) => {
        // reduce method looping over every price in cusomerbasket and adding it
        const basketPrice = customerBasket.reduce((a, {price}) => a + price, 0);

        console.log('The total price of all cars in your basket rn is:', basketPrice);
        return basketPrice;
    }

    calcBasket(customerBasket);


    const values = {
        customerBasket,
        addToBasket,
        handlePurchase,
        calcBasket,
        latestPurchase
    }

    return (
        <BasketContext.Provider value = {values}>
            {props.children}
        </BasketContext.Provider>
    )
}

export default BasketProvider;
