import { useContext, useState, useEffect } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { CarContext } from "../contexts/CarContext";
import styles from "../styles/Details.module.css";

const Details = (props) => {
  const { cars } = useContext(CarContext);
  const [detailCar, setDetailCar] = useState(null);

  const { addToBasket } = useContext(BasketContext);

  useEffect(() => window.scrollTo(0, 0), []);

  // Find the car with corresponding vin in the cars-array and setDetailCar to show the right car.
  // Not strict equality because params are always strings.
  useEffect(() => {
    if (cars) {
      setDetailCar(cars.find((car) => car.vin == props.match.params.vin));
    }
  }, [cars]);

  const handleClick = () => {
    addToBasket(detailCar);
  };

  const renderDetails = () => {
    return (
      <div className={styles.detailsPage}>
        <div className={styles.carDetailsWrapper}>
          <div className={styles.imgContainer}>
            <img
              className={styles.car}
              src={`/assets/car-pictures/${detailCar.make}-${detailCar.model}-${detailCar.year}.jpg`}
              alt={`picture of ${detailCar.make} ${detailCar.model}`}
            />
            {/* Sale icon shows if car is discounted */}
            {detailCar.discount && (
              <div className={styles.saleIcon}>
                <img src={`/assets/sale-icon.png`} alt="sale icon" />
              </div>
            )}
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.headerPriceWrapper}>
              <h3>
                {detailCar.make} {detailCar.model}
              </h3>

              {/* Make different style on price depending on discount true or false */}
              {detailCar.discount ? (
                <p className={styles.salePrice}>
                  $ {detailCar.price}
                  <span> inc. VAT </span>
                </p>
              ) : (
                <p className={styles.price}>
                  $ {detailCar.price}
                  <span> inc. VAT </span>
                </p>
              )}

              <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={handleClick}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className={styles.detailsAndDescriptionWrapper}>
              <ul className={styles.detailedInfoWrapper}>
                <li>
                  <span>Year: </span>
                  {detailCar.year}
                </li>
                <li>
                  <span>City: </span>
                  {detailCar.city}
                </li>
                <li>
                  <span>Miles: </span>
                  {detailCar.miles}
                </li>
                <li className={styles.vin}>
                  <span>VIN: </span>
                  {detailCar.vin}
                </li>
              </ul>
              <div className={styles.descWrapper}>
                <p className={styles.descHeader}>Description:</p>
                <p className={styles.desc}>{detailCar.descLong}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // If detailCar is set the JSX from the renderDetails will show and if detailCar is null an empty div will be renderd
  return detailCar ? renderDetails() : <div></div>;
};

export default Details;
