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
        // Just for TESTing - delete when testing is done
        console.log('From BasketContext/handlePurchase. Recieved userdata', userData );

        // Save the userdata from PaymentForm and the cars in the customerBasket in latestPurchase variable.
        setLatestPurchase({
            userData,
            carsPurchased: [...customerBasket]
        });
        //resets the customerBasket
        setCustomerBasket([]);
    }

    // For TESTing - delete when test is done
    useEffect(() => {
        console.log('from useEffect', latestPurchase);
    }, [latestPurchase])
    useEffect(() => {
        console.log('from useEffect', customerBasket);
    }, [customerBasket])

    const values = {
        customerBasket,
        addToBasket,
        handlePurchase
    }

    return (
        <BasketContext.Provider value = {values}>
            {props.children}
        </BasketContext.Provider>
    )
}

export default BasketProvider;
