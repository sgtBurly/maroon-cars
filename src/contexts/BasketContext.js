import React, { useState, createContext} from 'react';
import toast, { Toaster } from 'react-hot-toast';
export const BasketContext = createContext();

export const BasketProvider = (props) => {

    // The cart holding the array with the "saved" cars
    const [customerBasket, setCustomerBasket] = useState([]);

    //Test console.log
    console.log('In BasketContext, customerBasket right now: ', customerBasket);

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
        // This array is empty when there should be 1 item? Works when adding the car for the second time...?
        console.log(customerBasket);
    }

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
        calcBasket
    }

    return (
        <BasketContext.Provider value = {values}>
            {props.children}
        </BasketContext.Provider>
    )
}

export default BasketProvider;
