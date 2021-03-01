import React, { useState } from "react";
import {BasketContext} from "./contexts/BasketContext";

const PaymentPage = () => {

    let [ FirstName, setFirstName ] = useState(`First name...`);
    let [ LastName, setLastName ] = useState(`Last name...`);
    let [ Address, setAddress ] = useState(`Address...`);
    let [ City, setCity ] = useState(`City...`);
    let [ ZipCode, seZipCode ] = useState(`Zip code...`);
    let [ Country, setCountry ] = useState(`Country...`);

    return ( 
        <div className="PaymentPage">
            <section className="SummaryWrapper">
                <div className="SummaryCard">
                </div>
            </section>
            <section className="FormWrapper">
                <form>
                    <input type="text" placeholder={FirstName}/>
                    <input type="text" placeholder={LastName}/>
                    <input type="text" placeholder={Address}/>
                    <input type="text" placeholder={City}/>
                    <input type="text" placeholder={ZipCode}/>
                    <input type="text" placeholder={Country}/>
                </form>
                <button>Complete Purchase</button>
            </section>
        </div>
     );
}

export default PaymentPage;