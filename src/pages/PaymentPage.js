import React, { useState, useContext, useEffect } from "react";
import {BasketContext} from "../contexts/BasketContext";

const PaymentPage = () => {

    const {handleUserData} = useContext(BasketContext)

    let [ FirstName, setFirstName ] = useState("");
    let [ LastName, setLastName ] = useState("");
    let [ Address, setAddress ] = useState("");
    let [ City, setCity ] = useState("");
    let [ ZipCode, setZipCode ] = useState("");
    let [ Country, setCountry ] = useState("");

        const updateUserFName = e => {
            setFirstName(e.target.value);
       }
   
       const updateUserLName = e => {
           setLastName(e.target.value);
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

       const handleSubmit = (e) => {

        e.preventDefault();
        
        const userCredentials = {
            FirstName, 
            LastName,
            Address,
            City,
            ZipCode,
            Country
        };

        handleUserData(userCredentials);
    }
       

    return ( 
        <div className="PaymentPage">
            <section className="SummaryWrapper">
                <div className="SummaryCard">
                </div>
            </section>
            <section className="FormWrapper">
                <form id="UserForm" onSubmit={handleSubmit}>
                    <input type="text" onChange={updateUserFName} placeholder="First name..." reqiered/>
                    <input type="text" onChange={updateUserLName} placeholder="Last name..." reqiered/>
                    <input type="text" onChange={updateUserAddress} placeholder="Address..." reqiered/>
                    <input type="text" onChange={updateUserCity} placeholder="City..." reqiered/>
                    <input type="text" onChange={updateUserCipCode} placeholder="Zip code..." reqiered/>
                    <input type="text" onChange={updateUserCountry} placeholder="Country..." reqiered/>
                    <button  form="UserForm">Purchase</button>
                </form>
            </section>
        </div>
     );
}

export default PaymentPage;