import React, { useContext }from 'react';
import { BasketContext } from '../contexts/BasketContext';
import styles from "../styles/CardsWrapperStyles.module.css";


// looping over car items(got info from BasketContext), map them to be able to render every chosen item including it's details
const Card = () => {
    let {customerBasket, removeFromBasket} = useContext(BasketContext);

    return (
        <div className={styles.cardWrapperContainer}>
            <div className={styles.cardWrapper}>
                <h2 className={styles.cardHeading}>Current item/s in your basket</h2>
                {customerBasket.map((car, i) => (
                    <div className={styles.flex} key={i}>
                        <div className={styles.carImageContainer}>
                            <img className={styles.carImage}
                                src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
                                alt={`picture of ${car.make} ${car.model}`}
                            />
                        </div>
                        <div>
                            <span>Make: {car.make} Model: {car.model}</span>
                            <p>Year: {car.year}</p>
                        </div>
                        <p>Short description: {car.descShort}</p>
                        <div>
                            <p>Price: {car.price}</p>
                            // used anonymous function for removeFromBasket
                            <button  className="trash-btn" onClick={() => removeFromBasket(car.vin) }>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;