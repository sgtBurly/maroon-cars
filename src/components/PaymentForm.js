import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {BasketContext} from "../contexts/BasketContext";
import styles from "../styles/PaymentForm.module.css";

const PaymentForm = () => {

    const history = useHistory();

    // Import function from BasketContext, for sending user input
    const { handlePurchase } = useContext(BasketContext);

    const [ FirstName, setFirstName ] = useState("");
    const [ LastName, setLastName ] = useState("");
    const [ Address, setAddress ] = useState("");
    const [ City, setCity ] = useState("");
    const [ ZipCode, setZipCode ] = useState("");
    const [ Country, setCountry ] = useState("");
    const [ Email, setEmail] = useState("");
    const [ PaymentMethod, setPaymentMethod] = useState("");
    const [ DeliveryMethod, setDeliveryMethod] = useState("");


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
    const updateUserZipCode = e => {
        setZipCode(e.target.value);
    }
    const updateUserCountry = e => {
        setCountry(e.target.value);
    }
    const updatePaymentMethod = e => {
        setPaymentMethod(e.target.value);
    }
    const updateDeliveryMethod = e => {
      setDeliveryMethod(e.target.value);
    }

    //When user submits, prevent page reload and store the user credentials of user in new variable.
    const handleSubmit = (e) => {
        e.preventDefault();
        const userCredentials = {
            FirstName,
            LastName,
            Email,
            Address,
            City,
            ZipCode,
            Country,
            PaymentMethod,
            DeliveryMethod
        };
      //Fire handle function expressed in BasketContext and send userCredentials variable as prop.
      handlePurchase(userCredentials);

      //redirect user to confirm page, add right link when component exist!!
        history.push("/checkout");
    }

    return (
        <div className={styles.PaymentForm}>
            <h2>Please fill the form to complete your purchase</h2>
            <section className={styles.FormWrapper}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <div className={styles.ContactInfo}>
                        <input className={styles.textInput} type="text" onChange={updateUserFName} placeholder="First name..." required/>
                        <input className={styles.textInput} type="text" onChange={updateUserLName} placeholder="Last name..." required/>
                        <input className={styles.textInput} type="text" onChange={updateUserEmail} placeholder="Email..." required />
                        <input className={styles.textInput} type="text" onChange={updateUserAddress} placeholder="Address..." required/>
                        <input className={styles.textInput} type="text" onChange={updateUserCity} placeholder="City..." required/>
                        <input className={styles.textInput} type="text" onChange={updateUserZipCode} placeholder="Zip code..." required/>
                        <input className={styles.textInput} type="text" onChange={updateUserCountry} placeholder="Country..." required/>
                    </div>

                    <div className={styles.PaymentOptions}>
                      <h3>Payment method</h3>
                        <label className={styles.RadioWrapper}>
                            <input type="radio" value="Visa" onChange={updatePaymentMethod} name="paymentmethod" required />
                            <i className="fab fa-cc-visa"></i>
                            Visa
                        </label>
                        <label className={styles.RadioWrapper}>
                            <input type="radio" value="Bitcoin" onChange={updatePaymentMethod} name="paymentmethod" required />
                            <i className="fab fa-bitcoin"></i>
                            Bitcoin
                        </label>
                        <label className={styles.RadioWrapper}>
                            <input type="radio" value="PayPal" onChange={updatePaymentMethod} name="paymentmethod" required />
                            <i className="fab fa-cc-paypal"></i>
                            PayPal
                        </label>
                        <label className={styles.RadioWrapper}>
                            <input type="radio" value="AmEx" onChange={updatePaymentMethod} name="paymentmethod" required />
                            <i className="fab fa-cc-amex"></i>
                            American Express
                        </label>
                    </div>

                    <div className={styles.DeliveryOptions}>
                      <h3>Delivery method</h3>
                        <label className={styles.RadioWrapper}>
                            <input type="radio" value="home" onChange={updateDeliveryMethod} name="deliverymethod" required />
                            <i className="fas fa-truck"></i>
                            Home delivery
                        </label>
                        <label className={styles.RadioWrapper}>
                            <input type="radio" value="store" onChange={updateDeliveryMethod} name="deliverymethod" required />
                            <i className="fas fa-warehouse"></i>
                            Pick up at store
                        </label>
                    </div>
                    <button type="submit" className={styles.completePurchaseBtn}>Complete purchase</button>
                </form>
            </section>
        </div>
     );
}

export default PaymentForm;