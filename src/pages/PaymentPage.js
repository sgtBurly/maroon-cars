import React, { useContext, useState, useEffect } from "react";
import PaymentForm from "../components/PaymentForm";
import EmptyBasket from "../components/EmptyBasket";
import { BasketContext } from '../contexts/BasketContext';
import { MemberContext } from '../contexts/MemberContext';
import Card from '../components/Card'
import LogIn from '../components/LogIn';
import RegisterComponent from '../components/RegisterComponent';
import styles from '../styles/PaymentPage.module.css'
import MemberInfo from "../components/MemberInfo";


const PaymentPage = () => {

    const { customerBasket } = useContext(BasketContext);
    const { loggedInMember } = useContext(MemberContext);
    const [toggleRegForm, setToggleRegForm] = useState(false);

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
                    <h2>You need to log in to buy the {customerBasket.length === 1 ? 'car' : 'cars'}</h2>
                    <LogIn />
                    <div className={styles.toggleButtonWrapper}>
                        <button id='toggleRegForm' onClick={() => setToggleRegForm(!toggleRegForm)}>
                            Not a member yet? Register here
                            {toggleRegForm ? <span> &uarr;</span> : <span> &darr;</span>}
                        </button>
                    </div>
                    { toggleRegForm ? <RegisterComponent /> : <div></div>}
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
           <h1></h1>
           {compToShow()}
       </div>
   )
}

export default PaymentPage;