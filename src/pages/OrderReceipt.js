import React from 'react';
import ReceiptStyles from '../styles/ReceiptStyles.module.css'

const orderReceipt = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  window.print();

  return (
    <div className={ReceiptStyles.main_wrapper}>
      <div className={ReceiptStyles.info_card}>
        <div className={ReceiptStyles.top_row}>
          <div className={ReceiptStyles.title_wrapper}>
            <h3>Receipt of Purchase</h3>
            <p>Date of purchase: {today}</p>
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
          <p className={ReceiptStyles.orderInfo}>1. Model<span>DATA</span></p>
          <p className={ReceiptStyles.orderInfo}>2. Make<span>DATA</span></p>
          <p className={ReceiptStyles.orderInfo}>3. VIN<span>DATA</span></p>
          <p className={ReceiptStyles.orderInfo}>4. Year<span>DATA</span></p>
          <div className={ReceiptStyles.total_wrapper}>
            <p>Total: <span>Money</span></p>
          </div>
        </div>
      </div>
  </div>
  );
}

export default orderReceipt;