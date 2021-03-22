import React, { useContext, useEffect } from "react";
import PaymentForm from "../components/PaymentForm";
import EmptyBasket from "../components/EmptyBasket";
import { BasketContext } from '../contexts/BasketContext';
import { MemberContext } from '../contexts/MemberContext';
import Card from '../components/Card'
import LogIn from '../components/LogIn';
import RegisterComponent from '../components/RegisterComponent';

const PaymentPage = () => {

    // localStorage.clear();
    const {customerBasket} = useContext(BasketContext);
    const {loggedInMember} = useContext(MemberContext);

    useEffect(() => window.scrollTo(0,0), []);

    if (loggedInMember.email){
        return (
        <div>
            <RegisterComponent /> 
            <LogIn />
        </div>
        )
    } else if(customerBasket.length < 1) {
        return (
            <EmptyBasket />
        );
    } else {
        return <Card />
    }

}

export default PaymentPage;