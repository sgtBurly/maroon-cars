import React, { useEffect, useContext } from 'react';
import ReceiptStyles from '../styles/ReceiptStyles.module.css';
import { BasketContext } from '../contexts/BasketContext';

const OrderReceipt = () => {

  const { latestPurchase } = useContext(BasketContext);

  useEffect(() => {
    console.log(latestPurchase.timestamp)
    window.print();
  });
  let orderNumber = 0;
  return (
    <div className={ReceiptStyles.main_wrapper}>
      <div className={ReceiptStyles.info_card}>
        <div className={ReceiptStyles.top_row}>
          <div className={ReceiptStyles.title_wrapper}>
            <h3>Receipt of Purchase</h3>
            <p>Date of purchase: {JSON.stringify(latestPurchase.timestamp)}</p>
          </div>
          <div className={ReceiptStyles.company_info}>
            <h5>Maroon Cars C</h5>
            <p>E-mail: maroonCars@hotmail.com</p>
            <p>Phone: +467892321</p>
            <p>Twitter: @MaroonCars</p>
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
                <div>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. Model<span>{purchasedCar.model}</span></p>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. Make<span>{purchasedCar.make}</span></p>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. VIN<span>{purchasedCar.vin}</span></p>
                  <p className={ReceiptStyles.orderInfo}>{orderNumber}. Year<span>{purchasedCar.year}</span></p>
                </div>
              )
            })
          }

          <div className={ReceiptStyles.total_wrapper}>
            <p>Total: <span>Money</span></p>
          </div>
        </div>
      </div>
  </div>
  );

}

export default OrderReceipt;