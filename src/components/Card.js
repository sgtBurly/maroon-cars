import React, { useContext }from 'react';
import { BasketContext } from '../contexts/BasketContext';
import styles from "../styles/BasketCard.module.css";


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
                                width="200"
                            />
                        </div>
                        <div className={styles.carInfo}>
                            <p><span className={styles.fat}>Make: </span>{car.make}</p>
                            <p><span className={styles.fat}>Model: </span>{car.model}</p>
                            <p><span className={styles.fat}>Year: </span>{car.year}</p>
                        </div>
                        <div className={styles.desc}>
                            <p>{car.descShort}</p>
                        </div>
                        <div className={styles.carPrice}>
                            <p><span className={styles.fat}>Price: </span>{car.price}</p>
                        </div>
                        <div className={styles.removeBtn}>
                            <button  className={styles.trashBtn}>
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                ))}
                <div>
                    <p className={styles.float}><span className={styles.fat}>Total price: </span>5 Guldkorn$$$$</p>
                </div>
            </div>
        </div>
    );
}

export default Card;