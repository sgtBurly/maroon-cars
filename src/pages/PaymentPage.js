const PaymentPage = () => {
    return ( 
        <div className="PaymentPage">
            <section className="SummaryWrapper">

            </section>
            <section className="FormWrapper">
                <form>
                    <input type="text" placeholder="First name..."/>
                    <input type="text" placeholder="Last name..."/>
                    <input type="text" placeholder="Address..."/>
                    <input type="text" placeholder="City..."/>
                    <input type="text" placeholder="Zip code..."/>
                    <input type="text" placeholder="State..."/>
                </form>
            </section>
        </div>
     );
}
 
export default PaymentPage;