import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { BasketContext } from "../contexts/BasketContext";
import styles from "../styles/PaymentForm.module.css";

const PaymentForm = () => {
  const history = useHistory();

  // Import function from BasketContext, for sending user input
  const { handlePurchase } = useContext(BasketContext);
  const [PaymentMethod, setPaymentMethod] = useState("");
  const [DeliveryMethod, setDeliveryMethod] = useState("");

  //OnChange in input triggers these functions, which updates the corresponding useState variable.
  const updatePaymentMethod = (e) => setPaymentMethod(e.target.value);
  const updateDeliveryMethod = (e) => setDeliveryMethod(e.target.value);

  //When user submits, prevent page reload and store the user credentials of user in new variable.
  const handleSubmit = (e) => {
    e.preventDefault();
    const userPaymentOptions = {
      PaymentMethod,
      DeliveryMethod,
    };
    //Fire handle function expressed in BasketContext and send userCredentials variable as prop.
    handlePurchase(userPaymentOptions);

    //redirect user to confirm page
    history.push("/checkout");
  };

  return (
    <div className={styles.PaymentForm}>
      <hr />
      <section className={styles.FormWrapper}>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <h2 className={styles.h2}>Payment options</h2>
          <div className={styles.PaymentOptions}>
            <label className={styles.RadioWrapper}>
              <input
                type="radio"
                value="Visa"
                onChange={updatePaymentMethod}
                name="paymentmethod"
                required
              />
              <i className="fab fa-cc-visa fa-3x"></i>
            </label>
            <label className={styles.RadioWrapper}>
              <input
                type="radio"
                value="Bitcoin"
                onChange={updatePaymentMethod}
                name="paymentmethod"
                required
              />
              <i className="fab fa-bitcoin fa-3x"></i>
            </label>
            <label className={styles.RadioWrapper}>
              <input
                type="radio"
                value="PayPal"
                onChange={updatePaymentMethod}
                name="paymentmethod"
                required
              />
              <i className="fab fa-cc-paypal fa-3x"></i>
            </label>
            <label className={styles.RadioWrapper}>
              <input
                type="radio"
                value="AmEx"
                onChange={updatePaymentMethod}
                name="paymentmethod"
                required
              />
              <i className="fab fa-cc-amex fa-3x"></i>
            </label>
          </div>
          {/* <hr /> */}
          <h2 className={styles.h2}>Delivery options</h2>
          <div className={styles.DeliveryOptions}>
            <label className={styles.RadioWrapper}>
              <input
                type="radio"
                value="home"
                onChange={updateDeliveryMethod}
                name="deliverymethod"
                required
              />
              <i className="fas fa-truck fa-2x"></i>
              Home delivery
            </label>
            <label className={styles.RadioWrapper}>
              <input
                type="radio"
                value="store"
                onChange={updateDeliveryMethod}
                name="deliverymethod"
                required
              />
              <i className="fas fa-warehouse fa-2x"></i>
              Pick up at store
            </label>
          </div>
          <button type="submit" className={styles.completePurchaseBtn}>
            Complete purchase
          </button>
        </form>
      </section>
    </div>
  );
};

export default PaymentForm;
