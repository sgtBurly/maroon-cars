import React, { useContext, useEffect } from "react";
import PaymentForm from "../components/PaymentForm";
import EmptyBasket from "../components/EmptyBasket";
import { BasketContext } from '../contexts/BasketContext';
import { MemberContext } from '../contexts/MemberContext';
import Card from '../components/Card'
import LogIn from '../components/LogIn';
import RegisterComponent from '../components/RegisterComponent';

const PaymentPage = () => {

    const { customerBasket } = useContext(BasketContext);
    const { loggedInMember } = useContext(MemberContext);

    useEffect(() => window.scrollTo(0,0), []);

    // If emptyBasket
    if (customerBasket.length < 1){
        return (
            <div>
                <EmptyBasket />
            </div>
        )
        //If not logged in and Basket
    } else if(!loggedInMember.email && customerBasket.length > 0) {
        return (
            <div>
                <RegisterComponent />
                <LogIn />
            </div>
        );
        //If logged in and Basket
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