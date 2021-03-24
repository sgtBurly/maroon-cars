import React, { useContext, useEffect } from "react";
import PaymentForm from "../components/PaymentForm";
import EmptyBasket from "../components/EmptyBasket";
import { BasketContext } from '../contexts/BasketContext';
import { MemberContext } from '../contexts/MemberContext';
import Card from '../components/Card'
import styles from '../styles/PaymentPage.module.css'
import MemberInfo from "../components/MemberInfo";
import Membership from '../pages/Membership'


const PaymentPage = () => {

    const { customerBasket } = useContext(BasketContext);
    const { loggedInMember } = useContext(MemberContext);

    useEffect(() => window.scrollTo(0,0), []);

   const compToShow = () => {
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
                    <Card />
                    <h2 className={styles.needLogIn}>Please log in to complete your purchase!</h2>
                    <Membership />
                </div>
            );
            //If logged in and Basket
        } else {
            return (
                <div>
                    <Card />
                    <MemberInfo />
                    <PaymentForm />
                </div>
            )
        }
   }

   return(
       <div className={styles.paymentpage}>
           {compToShow()}
       </div>
   )
}

export default PaymentPage;