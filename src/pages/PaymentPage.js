import React, { useContext } from "react";
import PaymentForm from "../components/PaymentForm";
import EmptyBasket from "../components/EmptyBasket";
import { BasketContext } from '../contexts/BasketContext';


const PaymentPage = () => {
    const {customerBasket} = useContext(BasketContext);

    if (customerBasket.length < 1) {
        return <EmptyBasket />
    } else {
        return (
            <div className="PaymentPage">
                <h1>Payment page</h1>
                {/* Summary component will go here */}
                <PaymentForm />
            </div>
        );
    }
}

export default PaymentPage;