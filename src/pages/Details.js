import { useContext, useState, useEffect, } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import { CarContext } from '../contexts/CarContext'
import styles from '../styles/Details.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const Details = (props) => {

  const { cars } = useContext(CarContext);
  const [detailCar, setDetailCar] = useState(null);
  const { history } = useHistory(); 

  const { addToBasket } = useContext(BasketContext);

  // Find the car with corresponding vin in the cars-array and setDetailCar to show the right car.
  // Not strict equality because params are always strings.
  useEffect( () => {
    if(cars) {
      setDetailCar(cars.find(car => car.vin == props.match.params.vin));
    }
  }, [cars]);

  const handleClick = () => {
      console.log('From DetailsPage: Sending car to BasketContext...');
      addToBasket(detailCar);
  }

  const handleBackButton = () => {
    console.log("Back button clicked");
    history.push("/");
  }

  const renderDetails = () => {
    return (
      <div className={styles.detailsPage}>
        <div className={styles.carDetailsWrapper}>
          <div className={styles.iconWrapper} onClick={handleBackButton}>
            <i class="fas fa-chevron-left fa-lg"></i>
          </div>
          <div className={styles.imgContainer}>
            <img src={`/assets/car-pictures/${detailCar.make}-${detailCar.model}-${detailCar.year}.jpg`} alt={`picture of ${detailCar.make} ${detailCar.model}`} />
          </div>
          <div className={styles.infoContainer}>
              <h1>{detailCar.make} {detailCar.model}</h1>
              <p className={styles.desc}>{detailCar.descLong}</p>
              <p className={styles.price}>${detailCar.price}</p>
              <p><span>Year: </span>{detailCar.year}</p>
              <p><span>City: </span>{detailCar.city}</p>
              <p><span>Miles: </span>{detailCar.miles}</p>
              <p className={styles.vin}><span>VIN: </span>{detailCar.vin}</p>
              {/* Adding 'Add to cart'-button with functionality later */}
              <button className={styles.button} onClick={handleClick} >Add to cart</button>
          </div>
        </div>
      </div>
  )
}

  // If detailCar is set the JSX from the renderDetails will show and if detailCar is null an empty div will be renderd
  return detailCar ? renderDetails() : <div></div>;
}

export default Details;