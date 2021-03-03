import React, { useState } from "react";
import styles from "../styles/PaymentPage.module.css";

const PaymentPage = () => {

    let [ FirstName, setFirstName ] = useState(`First name...`);
    let [ LastName, setLastName ] = useState(`Last name...`);
    let [ Address, setAddress ] = useState(`Address...`);
    let [ City, setCity ] = useState(`City...`);
    let [ ZipCode, setZipCode ] = useState(`Zip code...`);
    let [ Country, setCountry ] = useState(`Country...`);

    return ( 
        <div className="PaymentPage">
            <section className={styles.PaymentPage}>
                <section className={styles.SummaryWrapper}>
                    <div className="SummaryCard">
                        <h2>Summary</h2>
                        <h3>Your basket is empty :(</h3>
                    </div>
                </section>
                <section className={styles.FormWrapper}>
                    <form className={styles.Form}>
                        <h2>Please fill the form to complete your purchase</h2>
                        <h3>Personal information</h3>
                            <input type="text" placeholder={FirstName}/>
                            <input type="text" placeholder={LastName}/>
                            <input type="text" placeholder={Address}/>
                            <input type="text" placeholder={City}/>
                            <input type="text" placeholder={ZipCode}/>
                            <input type="text" placeholder={Country}/>

                        <h3>Payment method</h3>
                            <select name="payment method" id="payment">
                                <option value="card">Card</option>
                                <option value="swish">Swish</option>
                                <option value="klarna">Klarna</option>
                            </select>
                            <input type="text" placeholder="Card/swish/klarna number"/>

                        <h3>Delivery method</h3>
                            <select name="delivery method" id="delivery">
                                <option>Home delivery</option>
                                <option>Pick up at store</option>
                            </select>

                        <button className={styles.completePurchaseBtn}>Complete purchase</button>
                    </form>
                </section>
            </section>
        </div>
     );
}

export default PaymentPage;