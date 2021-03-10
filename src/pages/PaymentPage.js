import React, { useContext, useEffect } from "react";
import PaymentForm from "../components/PaymentForm";
import EmptyBasket from "../components/EmptyBasket";
import { BasketContext } from '../contexts/BasketContext';
import Card from '../components/Card'


const PaymentPage = () => {
    const {customerBasket} = useContext(BasketContext);

    useEffect(() => {
        window.scrollTo(0,0)
      }, []);

    if (customerBasket.length < 1) {
        return <EmptyBasket />
    } else {
        return (
            <div className="PaymentPage">
                <h1>Payment page</h1>
                < Card />
                <PaymentForm />
            </div>
        );
    }
}

export default PaymentPage;