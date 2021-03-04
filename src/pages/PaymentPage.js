import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {BasketContext} from "../contexts/BasketContext";
import styles from "../styles/PaymentPage.module.css";

const PaymentPage = () => {

    const history = useHistory();
    const {handleUserData} = useContext(BasketContext)

    const [ FirstName, setFirstName ] = useState("");
    const [ LastName, setLastName ] = useState("");
    const [ Address, setAddress ] = useState("");
    const [ City, setCity ] = useState("");
    const [ ZipCode, setZipCode ] = useState("");
    const [ Country, setCountry ] = useState("");
    const [Email, setEmail] = useState("");
    const [PaymentMethod, setPaymentMethod] = useState("");


    //OnChange in input triggers these functions, which updates the corresponding useState variable.
    const updateUserFName = e => {
        setFirstName(e.target.value);
    }

    const updateUserLName = e => {
        setLastName(e.target.value);
    }

    const updateUserEmail = e => {
        setEmail(e.target.value);
    }

    const updateUserAddress = e => {
    setAddress(e.target.value);
    }

    const updateUserCity = e => {
        setCity(e.target.value);
    }
    
    const updateUserCipCode = e => {
        setZipCode(e.target.value);
    }

    const updateUserCountry = e => {
        setCountry(e.target.value);
    }

    const updatePaymentMethod = e => {
        setPaymentMethod(e.target.value);
        console.log("This is updated payment method :", PaymentMethod);
    }

    //When user submits, prevent page reload and store the user credentials of user in new variable.
    const handleSubmit = (e) => {

        e.preventDefault();

        //redirect user to confirm page
        history.push("/");

        const userCredentials = {
            FirstName, 
            LastName,
            Email,
            Address,
            City,
            ZipCode,
            Country,
            PaymentMethod
        };
    //Fire handle function expressed in BasketContext and send userCredentials variable as prop.
        handleUserData(userCredentials);
    }

    return ( 
        <div className={styles.PaymentPage}>
            <section className={styles.SummaryWrapper}>
                <div className={styles.SummaryCard}>
                </div>
            <h3>Total: </h3>
            </section>
            <section className={styles.UserFormWrapper}>
                <h3>Who art thou?</h3>
                <form className={styles.UserForm} onSubmit={handleSubmit}>
                    <div className={styles.ContactInfo}>
                        <input type="text" onChange={updateUserFName} placeholder="First name..." reqiered/>
                        <input type="text" onChange={updateUserLName} placeholder="Last name..." reqiered/>
                        <input type="text" onChange={updateUserEmail} placeholder="Email..." required />
                        <input type="text" onChange={updateUserAddress} placeholder="Address..." reqiered/>
                        <input type="text" onChange={updateUserCity} placeholder="City..." reqiered/>
                        <input type="text" onChange={updateUserCipCode} placeholder="Zip code..." reqiered/>
                        <input type="text" onChange={updateUserCountry} placeholder="Country..." reqiered/>
                    </div>
                    <div className={styles.PaymentOptions}>
                        <label>
                            <input type="radio" value="Visa" onChange={updatePaymentMethod} name="paymentmethod" required />
                        <i class="fab fa-cc-visa"></i>
                            Visa
                        </label>
                        <label>
                            <input type="radio" value="Bitcoin" onChange={updatePaymentMethod} name="paymentmethod" required />
                        <i class="fab fa-bitcoin"></i>
                            Bitcoin
                        </label>
                        <label>
                            <input type="radio" value="PayPal" onChange={updatePaymentMethod} name="paymentmethod" required />
                        <i class="fab fa-cc-paypal"></i>
                            PayPal
                        </label>
                        <label>
                            <input type="radio" value="AmEx" onChange={updatePaymentMethod} name="paymentmethod" required />
                        <i class="fab fa-cc-amex"></i>
                            American Express
                        </label>
                    </div>
                        <button className={styles.completePurchaseBtn}>Purchase</button>
                </form>
            </section>
        </div>
     );
}

export default PaymentPage;