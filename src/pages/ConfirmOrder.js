import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import ConfirmOrderStyles from '../styles/ConfirmOrderStyles.module.css'
import { Link } from 'react-router-dom';

const ConfirmOrder = () => {

  const { latestPurchase, calcBasket } = useContext(BasketContext);

  // Timestamp does not yet exist for latestPurchase variable.

  const renderConfirmation = () => {
    return (
      <div className={ConfirmOrderStyles.main_wrapper}>
        <h2 className={ConfirmOrderStyles.h2}>Thank you for your purchase!</h2>
        <div className={ConfirmOrderStyles.info_card}>
          <h3 className={ConfirmOrderStyles.h3}>Your order</h3>
          <hr />
          {/* Can be used when latestPurchase-variable has timestamp! */}
         {/*  <div className={ConfirmOrderStyles.info_date}>{`${latestPurchase.timestamp.toDateString()} ${latestPurchase.timestamp.getHours()}:${latestPurchase.timestamp.getMinutes()}`}</div>
          <div> */}
          <p>{`${latestPurchase.userData.FirstName} ${latestPurchase.userData.LastName}`}</p>
          <p>{latestPurchase.userData.Email}</p>
          <h4 className={ConfirmOrderStyles.h4}>Billing address</h4>
          <p>{latestPurchase.userData.Address}</p>
          <p>{`${latestPurchase.userData.ZipCode} ${latestPurchase.userData.City} `}</p>
          <p>{latestPurchase.userData.Country}</p>

        <div className={ConfirmOrderStyles.info_row}>
            <p>Payment method:</p>
            {latestPurchase.userData.PaymentMethod[0].toUpperCase() + latestPurchase.userData.PaymentMethod.slice(1)}
        </div>
        <div className={ConfirmOrderStyles.info_row}>
            <p>Delivery method:</p>
            {latestPurchase.userData.DeliveryMethod === 'store' ? <p>Pick up at store</p> : <p>Home delivery</p> }
        </div>
        <hr />
        <div className={ConfirmOrderStyles.top_wrapper}>
          <h4>Your cars</h4>
          {latestPurchase.carsPurchased.map(car => (
            <div className={ConfirmOrderStyles.carInfo} key={car.vin}>
              <div className={ConfirmOrderStyles.info_row}>
                <p className={ConfirmOrderStyles.info_bold}>{car.make}-{car.model}</p>
                <p>$ {car.price}</p>
              </div>
              <div className={ConfirmOrderStyles.info_row}>
                {/* <p>{car.year}</p> */}
                <p>VIN: {car.vin}</p>
              </div>
            </div>
          ))}
          <hr />
          <div className={`${ConfirmOrderStyles.info_row} ${ConfirmOrderStyles.info_bold}`}>
            <h3>Total price</h3>
            <p className={ConfirmOrderStyles.totalPrice}>$ {calcBasket(latestPurchase.carsPurchased)}</p>
          </div>
          <div className={ConfirmOrderStyles.bottom_wrapper}>
            <Link to="/">
              <button className={`${ConfirmOrderStyles.button} ${ConfirmOrderStyles.ok}`}>Ok</button>
            </Link>
            <Link to="/orderReceipt">
              <button className={`${ConfirmOrderStyles.button} ${ConfirmOrderStyles.print}`}>Print</button>
            </Link>

          </div>
          </div>
        </div>
      </div>
    );
  }

  return latestPurchase ? renderConfirmation() : <div className={ConfirmOrderStyles.main_wrapper}></div>
}

export default ConfirmOrder;