import { useContext, useState, useEffect } from 'react';
import { CarContext } from '../contexts/CarContext'
import styles from '../styles/Details.module.css'
import toast, { Toaster } from 'react-hot-toast';

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

  // Later, functionality to add carobject to basket goes here!
  const handleClick = () => toast.success('Succesfully added to your cart!')


  const renderDetails = () => {
    return (
      <div className={styles.carDetailsWrapper}>
        <div className={styles.imgContainer}>
          <img src={`/assets/car-pictures/${detailCar.make}-${detailCar.model}-${detailCar.year}.jpg`} alt={`picture of ${detailCar.make} ${detailCar.model}`} />
        </div>
          <div className={styles.infoContainer}>
            <h1>{detailCar.make} {detailCar.model}</h1>
            <p className={styles.price}>${detailCar.price}</p>
            <p><span>Year: </span>{detailCar.year}</p>
            <p><span>Miles: </span>{detailCar.miles}</p>
            <p className={styles.desc}>{detailCar.descLong}</p>
            <p><span>City: </span>{detailCar.city}</p>
            <p className={styles.vin}><span>VIN: </span>{detailCar.vin}</p>
            {/* Adding 'Add to cart'-button with functionality later */}
            <button className={styles.button} onClick={handleClick} >Add to cart</button>
            <Toaster position="top-right"/>
        </div>
      </div>
    )
  }

  // If detailCar is set the JSX from the renderDetails will show and if detailCar is null an empty div will be renderd
  return detailCar ? renderDetails() : <div></div>;
}

export default Details;