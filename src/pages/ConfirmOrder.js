import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import ConfirmOrderStyles from '../styles/ConfirmOrderStyles.module.css'

const ConfirmOrder = () => {

//  const { latestPurchase, calcBasket } = useContext(BasketContext);

//   setLatestPurchase({
//     userData,
//     carsPurchased: [...customerBasket]
// });

  const latestPurchase = {
    userData: {
      FirstName: 'Firstname',
      LastName: 'Lastname',
      Email: 'mail@mail.com',
      Address: 'Gatan 45',
      City: 'Malmö',
      ZipCode: '21345',
      Country: 'Sweden',
      PaymentMethod: 'visa',
      DeliveryMethod: 'store',
    },
    carsPurchased: [
      {
        make: "Chevrolet",
        model: "Camaro",
        year: 1973,
        vin: "1D4PT5GK0BW487259",
        city: "Santa Rosa",
        descShort: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
        "descLong": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        price: 554963,
        miles: 15432
      },
      {
        make: "Pontiac",
        model: "Montana SV6",
        year: 2006,
        vin: "JN1CV6FE7DM360307",
        city: "Jāsim",
        descShort: "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
        descLong: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        price: 299379,
        miles: 12346,
        discount: true
      }
    ]
  }
  console.log(latestPurchase)

  const handleOkClick = () => {
    console.log('You clicked OK...');
    // Route to Home
  }

  const handlePrintClick = () => {
    console.log('You clicked print...');
    // Route to OrderReceipt-component?
  }

  return (
    <div className={ConfirmOrderStyles.main_wrapper}>
      <h2 className={ConfirmOrderStyles.h2}>Thank you for your purchase!</h2>
      <div className={ConfirmOrderStyles.info_card}>
        <div className={ConfirmOrderStyles.top_wrapper}>
          <h3>Cars purchased</h3>
          {latestPurchase.carsPurchased.map(car => (
            <div key={car.vin}>
              <div className={ConfirmOrderStyles.info_row}>
                <p>{car.make}-{car.model}</p>
                <p>{car.price}</p>
             </div>
              <div className={ConfirmOrderStyles.info_row}>
                <p>{car.year}</p>
                <p>{car.vin}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={ConfirmOrderStyles.bottom_wrapper}>
          <button onClick={() => handleOkClick} className={`${ConfirmOrderStyles.button} ${ConfirmOrderStyles.ok}`}>Ok</button>
          <button onClick={() => handlePrintClick} className={`${ConfirmOrderStyles.button} ${ConfirmOrderStyles.print}`}>Print</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;