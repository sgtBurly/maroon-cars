import React from 'react';
import ReceiptStyles from '../styles/ReceiptStyles.module.css'

const orderReceipt = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  //window.print();

  return (
    <div className={ReceiptStyles.main_wrapper}>
    <div className={ReceiptStyles.info_card}>
      <h4>Receipt of purchase</h4>
      <p className={ReceiptStyles.p}>Model:<span>{/* Put model-data here */}</span></p>
      <p className={ReceiptStyles.p}>Make:<span>{/* Put make-data here */}</span></p>
      <p className={ReceiptStyles.p}>Year:<span>{/* Put year-data here */}</span></p>
      <p className={ReceiptStyles.p}>VIN:<span>{/* Put vin-data here */}</span></p>
      <p className={ReceiptStyles.p}>Price:<span>{/* Put price-data here */}</span></p>
      <p className={ReceiptStyles.date}>Purchased made: {today}</p>
    </div>
  </div>
  );
}

export default orderReceipt;