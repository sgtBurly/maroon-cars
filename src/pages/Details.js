import { useContext, useState, useEffect } from 'react';
import { CarContext } from '../contexts/CarContext'
import styles from '../styles/Details.module.css'

const Details = (props) => {

  const { cars } = useContext(CarContext);
  const [detailCar, setDetailCar] = useState(null);

  // Find the car with corresponding vin in the cars-array and setDetailCar to show the right car.
  // Not strict equality because params are always strings.
  useEffect( () => {
    if(cars) {
      setDetailCar(cars.find(car => car.vin == props.match.params.vin));
    }
  }, [cars]);

  const renderDetails = () => {
    return (
      <div className={styles.carDetailsWrapper}>
        <div className={styles.imgContainer}>
          <img src={`/assets/car-pictures/${detailCar.make}-${detailCar.model}-${detailCar.year}.jpg`} alt={`picture of ${detailCar.make} ${detailCar.model}`} />
        </div>
          <div className={styles.infoContainer}>
            <h1>{detailCar.make} {detailCar.model}</h1>
            <p className={styles.price}>${detailCar.price}</p>
            <p>Model year: {detailCar.year}</p>
            <p>Miles: {detailCar.miles}</p>
            <p className={styles.desc}>{detailCar.descLong}</p>
            <p>City: {detailCar.city}</p>
            <p>VIN: {detailCar.vin}</p>
            {/* Adding 'Add to cart'-button with functionality later */}
            <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    )
  }

  // If detailCar is set the JSX from the renderDetails will show and if detailCar is null an empty div will be renderd
  return detailCar ? renderDetails() : <div></div>;
}

export default Details;