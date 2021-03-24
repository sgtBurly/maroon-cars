import React, { useState, createContext, useEffect, useContext} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MemberContext } from '../contexts/MemberContext';
export const BasketContext = createContext();

export const BasketProvider = (props) => {
    const { loggedInMember, addPurchase } = useContext(MemberContext);
    const basketStorageFunction = () => {
        if ("basketItems" in localStorage) {
            let customerBasket_Parsed = JSON.parse(localStorage.getItem("basketItems"));
            return customerBasket_Parsed
        }
        else {
            return []
        }
    }
    // The cart holding the array with the "saved" cars
    const [customerBasket, setCustomerBasket] = useState(basketStorageFunction());
    // The latest purchase made by a user. Updated by handlePurchase-func to be sent to Confirm-page


    // method to call by the "add to cart"-buttons.
    const addToBasket = car => {
        // If the car is already in the customerBasket it is not added again but if the customerBasket is empty the car is always added.
        const alreadyAdded = customerBasket ? customerBasket.find(item => item.vin === car.vin) : false;
        if (alreadyAdded) {
            toast.error('This car is already in your cart!')
        }
        //Here the car is added to the basket
        else {
            setCustomerBasket(prevState => [car, ...prevState]);
            toast.success('Successfully added to your cart!')
            console.log('this is customerBasket: ', customerBasket);
        }
    }

  
  //Stringifys customerBasket when ready and adds to localstorage
  useEffect(() => {
    let customerBasketString = JSON.stringify(customerBasket);
    localStorage.setItem("basketItems", customerBasketString);
  }, [customerBasket]);

  //When app is rendered check if there are any cars in customerBasket
  useEffect(() => {}, []);

  // created removeFromBasket to remove each clicked item from customerBasket by using filter method.
  const removeFromBasket = (carVin) => {
    const newCustomerBasket = customerBasket.filter((c) => c.vin !== carVin);
    setCustomerBasket(newCustomerBasket);
  };

    const handlePurchase = (userData) => {

        let latestPurchase = {timestamp: new Date(), carsPurchased: [...customerBasket], deliveryMethod: userData.DeliveryMethod, paymentMethod: userData.PaymentMethod};
        addPurchase(latestPurchase);
        //resets the customerBasket
        setCustomerBasket([]);
    }

    //Func for calculating price in basket
    const calcBasket = (customerBasket) => {
        // reduce method looping over every price in cusomerbasket and adding it
        const basketPrice = customerBasket.reduce((a, {price}) => a + price, 0);
        return basketPrice;
    }
    useEffect(() => {
        if (localStorage.getItem('basketItems' > 0)) {
            setCustomerBasket(localStorage.getItem('basketItems'))
        }
      });
    const values = {
        customerBasket,
        addToBasket,
        removeFromBasket,
        handlePurchase,
        calcBasket,
    }

  return (
    <BasketContext.Provider value={values}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
