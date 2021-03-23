import React, { useEffect, useContext } from 'react';
import ReceiptStyles from '../styles/ReceiptStyles.module.css';
import { BasketContext } from '../contexts/BasketContext';
import { MemberContext } from '../contexts/MemberContext';

const OrderReceipt = () => {

  const { calcBasket } = useContext(BasketContext);
  const { loggedInMember } = useContext(MemberContext);

  useEffect(() => {
    window.scrollTo(0,0);
    window.print();
  }, []);

  let orderNumber = 0;
  return (
    <div className={ReceiptStyles.main_wrapper}>
      <div className={ReceiptStyles.info_card}>
        <div className={ReceiptStyles.top_row}>
          <div className={ReceiptStyles.company_info}>
            <p className={ReceiptStyles.logo}>Maroon Cars ©️</p>
            <p>E-mail: maroonCars@hotmail.com</p>
            <p>Phone: +467892321</p>
            <p>Twitter: @MaroonCars</p>
          </div>
          <div className={ReceiptStyles.title_wrapper}>
            <p>{`${loggedInMember.purchases[0].timestamp.toDateString()} ${loggedInMember.purchases[0].timestamp.getHours()}:${loggedInMember.purchases[0].timestamp.getMinutes()}`}</p>
            <h3>Receipt of Purchase</h3>
          </div>
        </div>
        <div className={ReceiptStyles.orderItem}>
            <p className={ReceiptStyles.orderInfo}>Customer: <span>{`${loggedInMember.firstName} ${loggedInMember.lastName}`}</span></p>
            <p className={ReceiptStyles.orderInfo}>Payment method: <span>{loggedInMember.purchases[0].paymentMethod}</span></p>
            <p className={ReceiptStyles.orderInfo}>Delivery method: {loggedInMember.purchases[0].deliveryMethod === 'home' ? <span>Home delivery</span> : <span>Pick up at store</span>}</p>
            <hr />
          </div>
        <div className={ReceiptStyles.bottom_row}>
          <div className={ReceiptStyles.items_wrapper}>
            <h6>Purchase info</h6>
          </div>
          {
            loggedInMember.purchases[0].carsPurchased.map(purchasedCar => {
              orderNumber++;
              return (
                <div className={ReceiptStyles.orderItem} key={purchasedCar.vin}>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. Make<span>{purchasedCar.make}</span></p>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. Model<span>{purchasedCar.model}</span></p>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. VIN<span>{purchasedCar.vin}</span></p>
                  <hr />
                </div>
              )
            })
          }
          <div className={ReceiptStyles.total_wrapper}>
            <p>Total: <span>$ {calcBasket(loggedInMember.purchases[0].carsPurchased)}</span></p>
          </div>
        </div>
      </div>
  </div>
  );

}

export default OrderReceipt;