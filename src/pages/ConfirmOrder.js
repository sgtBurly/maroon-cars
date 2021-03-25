import { useContext, useEffect } from "react";
import { BasketContext } from "../contexts/BasketContext";
import ConfirmOrderStyles from "../styles/ConfirmOrderStyles.module.css";
import { Link } from "react-router-dom";
import { MemberContext } from "../contexts/MemberContext";

const ConfirmOrder = () => {
  const { calcBasket } = useContext(BasketContext);
  const { loggedInMember } = useContext(MemberContext);

  useEffect(() => window.scrollTo(0, 0), []);

  const hour = ("0" + loggedInMember.purchases[0].timestamp.getHours()).slice(
    -2
  );
  const minutes = (
    "0" + loggedInMember.purchases[0].timestamp.getMinutes()
  ).slice(-2);

  const renderConfirmation = () => {
    return (
      <div className={ConfirmOrderStyles.main_wrapper}>
        <h2 className={ConfirmOrderStyles.h2}>Thank you for your purchase!</h2>
        <div className={ConfirmOrderStyles.info_card}>
          <h3 className={ConfirmOrderStyles.h3}>Your order</h3>
          <hr />
          {/* Can be used when loggedInMember.purchases[0]-variable has timestamp! */}
          <div className={ConfirmOrderStyles.info_date}>
            {`${loggedInMember.purchases[0].timestamp.toDateString()} ${hour}:${minutes}`}
          </div>
          <p>{`${loggedInMember.firstName} ${loggedInMember.lastName}`}</p>
          <p>{loggedInMember.email}</p>
          <h4 className={ConfirmOrderStyles.h4}>Billing address</h4>
          <p>{loggedInMember.address}</p>
          <p>{`${loggedInMember.zipCode} ${loggedInMember.city} `}</p>
          <p>{loggedInMember.country}</p>

          <div className={ConfirmOrderStyles.info_row}>
            <p>Payment method:</p>
            {loggedInMember.purchases[0].paymentMethod[0].toUpperCase() +
              loggedInMember.purchases[0].paymentMethod.slice(1)}
          </div>
          <div className={ConfirmOrderStyles.info_row}>
            <p>Delivery method:</p>
            {loggedInMember.purchases[0].deliveryMethod === "store" ? (
              <p>Pick up at store</p>
            ) : (
              <p>Home delivery</p>
            )}
          </div>
          <hr />
          <div className={ConfirmOrderStyles.top_wrapper}>
            <h4>Your cars</h4>
            {loggedInMember.purchases[0].carsPurchased.map((car) => (
              <div className={ConfirmOrderStyles.carInfo} key={car.vin}>
                <div className={ConfirmOrderStyles.info_row}>
                  <p className={ConfirmOrderStyles.info_bold}>
                    {car.make}-{car.model}
                  </p>
                  <p>$ {car.price}</p>
                </div>
                <div className={ConfirmOrderStyles.info_row}>
                  {/* <p>{car.year}</p> */}
                  <p>VIN: {car.vin}</p>
                </div>
              </div>
            ))}
            <hr />
            <div
              className={`${ConfirmOrderStyles.info_row} ${ConfirmOrderStyles.info_bold}`}
            >
              <h3>Total price</h3>
              <p className={ConfirmOrderStyles.totalPrice}>
                $ {calcBasket(loggedInMember.purchases[0].carsPurchased)}
              </p>
            </div>
          </div>
        </div>
        <div className={ConfirmOrderStyles.bottom_wrapper}>
          <Link
            className={`${ConfirmOrderStyles.button} ${ConfirmOrderStyles.ok}`}
            to="/"
          >
            OK
          </Link>
          <Link
            className={`${ConfirmOrderStyles.button} ${ConfirmOrderStyles.print}`}
            to="/orderReceipt"
          >
            Print
          </Link>
        </div>
      </div>
    );
  };

  return loggedInMember.purchases[0] ? (
    renderConfirmation()
  ) : (
    <div className={ConfirmOrderStyles.main_wrapper}></div>
  );
};

export default ConfirmOrder;
