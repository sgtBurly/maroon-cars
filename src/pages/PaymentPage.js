import React, { useState, useContext, useHistory } from "react";
import {BasketContext} from "../contexts/BasketContext";

const PaymentPage = () => {

    const {handleUserData} = useContext(BasketContext)

    const [ FirstName, setFirstName ] = useState("");
    const [ LastName, setLastName ] = useState("");
    const [ Address, setAddress ] = useState("");
    const [ City, setCity ] = useState("");
    const [ ZipCode, setZipCode ] = useState("");
    const [ Country, setCountry ] = useState("");
    const [Email, setEmail] = useState("");


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
        Country
    };

    //Fire handle function expressed in BasketContext and send userCredentials variable as prop.
        handleUserData(userCredentials);
    }
     
    const redirectToConfirmPage = () => {

    }

    return ( 
        <div className="PaymentPage">
            <section className="SummaryWrapper">
                <div className="SummaryCard">
                </div>
            </section>
            <h3>Total: </h3>
            <section className="UserFormWrapper">
                <h3>Who art thou?</h3>
                <form id="UserForm" onSubmit={handleSubmit}>
                    <input type="text" onChange={updateUserFName} placeholder="First name..." reqiered/>
                    <input type="text" onChange={updateUserLName} placeholder="Last name..." reqiered/>
                    <input type="text" onChange={updateUserEmail} placeholder="Email..." required />
                    <input type="text" onChange={updateUserAddress} placeholder="Address..." reqiered/>
                    <input type="text" onChange={updateUserCity} placeholder="City..." reqiered/>
                    <input type="text" onChange={updateUserCipCode} placeholder="Zip code..." reqiered/>
                    <input type="text" onChange={updateUserCountry} placeholder="Country..." reqiered/>
                    <button onClick={redirectToConfirmPage} form="UserForm">Purchase</button>
                </form>
            </section>
            <h3>How payeth thee?</h3>
            <section className="PaymentFormWrapper">
                <form id="PaymentFormWrapper">
                    <label>
                    <i class="fab fa-cc-visa"></i>
                        <input type="radio" value="Visa" name="paymentmethod" required />Visa
                    </label>
                    <label>
                    <i class="fab fa-bitcoin"></i>
                        <input type="radio" value="Bitcoin" name="paymentmethod" required />Bitcoin
                    </label>
                    <label>
                    <i class="fab fa-cc-paypal"></i>
                        <input type="radio" value="PayPal" name="paymentmethod" required />PayPal
                    </label>
                    <label>
                    <i class="fab fa-cc-amex"></i>
                        <input type="radio" value="AmEx" name="paymentmethod" required />American Express
                    </label>
                </form>
            </section>
        </div>
     );
}

export default PaymentPage;