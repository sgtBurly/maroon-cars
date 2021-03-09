import React, { useEffect, useContext } from 'react';
import ReceiptStyles from '../styles/ReceiptStyles.module.css';
import { BasketContext } from '../contexts/BasketContext';

const OrderReceipt = () => {

  const { latestPurchase, calcBasket } = useContext(BasketContext);

  useEffect(() => {
    console.log(latestPurchase.timestamp)
    window.print();
  });
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
            <p>{`${latestPurchase.timestamp.toDateString()} ${latestPurchase.timestamp.getHours()}:${latestPurchase.timestamp.getMinutes()}`}</p>
            <h3>Receipt of Purchase</h3>
          </div>
        </div>
        <div className={ReceiptStyles.bottom_row}>
          <div className={ReceiptStyles.items_wrapper}>
            <h6>Purchase info</h6>
          </div>
          {
            latestPurchase.carsPurchased.map(purchasedCar => {
              orderNumber++;
              return (
                <div className={ReceiptStyles.orderItem} key={purchasedCar.vin}>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. Make<span>{purchasedCar.make}</span></p>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. Model<span>{purchasedCar.model}</span></p>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. VIN<span>{purchasedCar.vin}</span></p>
                  {/* <p className={ReceiptStyles.orderInfo}>{orderNumber}. Year<span>{purchasedCar.year}</span></p> */}
                  <hr />
                </div>
              )
            })
          }
          <div className={ReceiptStyles.total_wrapper}>
            <p>Total: <span>$ {calcBasket(latestPurchase.carsPurchased)}</span></p>
          </div>
        </div>
      </div>
  </div>
  );

}

export default OrderReceipt;