import React, { useContext, useEffect } from "react";
import PaymentForm from "../components/PaymentForm";
import EmptyBasket from "../components/EmptyBasket";
import { BasketContext } from '../contexts/BasketContext';
import { MemberContext } from '../contexts/MemberContext';
import Card from '../components/Card'
import LogIn from '../components/LogIn';
import RegisterComponent from '../components/RegisterComponent';

const PaymentPage = () => {

    const {customerBasket} = useContext(BasketContext);
    const {loggedInMember} = useContext(MemberContext);

    useEffect(() => window.scrollTo(0,0), []);
    //Have to have localStorage.clear to log in /log out

    // If not loged in and emtyBasket
    if (loggedInMember.email === '' && customerBasket.length < 1){
        return (
            <div>
                <EmptyBasket />
            </div>
        )
        //If not loged in and Basket
    } else if(loggedInMember.email === '' && customerBasket.length > 0) {
        return (
            <div>
                <RegisterComponent />
                <LogIn />
            </div>
        );
        //If loged in but emptyBasket
    } else if (customerBasket < 1){
        return (
            <div>
                <EmptyBasket />
            </div>
        )
        //If loged in and Basket
    } else {
        return (
            <div>
                <Card />
                <PaymentForm />
            </div>
        )
    }
}

export default PaymentPage;