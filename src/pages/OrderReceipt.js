import React, { useEffect, useContext } from 'react';
import ReceiptStyles from '../styles/ReceiptStyles.module.css';
import { BasketContext } from '../contexts/BasketContext';

const OrderReceipt = () => {

  const { latestPurchase } = useContext(BasketContext);

  useEffect(() => {
    window.print();
  });

  return (
    <div className={ReceiptStyles.main_wrapper}>
      <div className={ReceiptStyles.info_card}>
        <div className={ReceiptStyles.top_row}>
          <div className={ReceiptStyles.title_wrapper}>
            <h3>Receipt of Purchase</h3>
            <p>Date of purchase: {latestPurchase.timestamp}</p>
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
          <p className={ReceiptStyles.orderInfo}>1. Model<span>{latestPurchase.carsPurchased.model}</span></p>
          <p className={ReceiptStyles.orderInfo}>2. Make<span>{latestPurchase.carsPurchased.make}</span></p>
          <p className={ReceiptStyles.orderInfo}>3. VIN<span>{latestPurchase.carsPurchased.vin}</span></p>
          <p className={ReceiptStyles.orderInfo}>4. Year<span>{latestPurchase.carsPurchased.year}</span></p>
          <div className={ReceiptStyles.total_wrapper}>
            <p>Total: <span>Money</span></p>
          </div>
        </div>
      </div>
  </div>
  );

}

export default OrderReceipt;