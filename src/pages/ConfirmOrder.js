import ConfirmOrderStyles from '../styles/ConfirmOrderStyles.module.css'

const ConfirmOrder = () => {
  return (
    <div className={ConfirmOrderStyles.main_wrapper}>
      <h2 className={ConfirmOrderStyles.h2}>Thank you for your purchase!</h2>
      <div className={ConfirmOrderStyles.info_card}>
        <div className={ConfirmOrderStyles.top_wrapper}>
          <div className={ConfirmOrderStyles.info_row}>
            <p>Model - Make</p>
            <p>Price</p>
          </div>
          <div className={ConfirmOrderStyles.info_row}>
            <p>Year</p>
            <p>VIN</p>
          </div>
        </div>
        <div className={ConfirmOrderStyles.bottom_wrapper}>
          <button className={`${ConfirmOrderStyles.button} ${ConfirmOrderStyles.ok}`}>Ok</button>
          <button className={`${ConfirmOrderStyles.button} ${ConfirmOrderStyles.print}`}>Print</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;