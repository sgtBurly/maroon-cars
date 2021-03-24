import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import { MemberContext } from '../contexts/MemberContext';
import styles from "../styles/PreviousOrder.module.css";


// looping over car items(got info from BasketContext), map them to be able to render every chosen item including it's details
const Card = () => {
    let {customerBasket, calcBasket} = useContext(BasketContext);
    let { loggedInMember } = useContext(MemberContext);
    console.log("this is loggedInMember", loggedInMember)
    //total price for cars
    let totalPrice = calcBasket(customerBasket);

    return (
        <div className={styles.cardWrapperContainer}>
            <div className={styles.cardWrapper}>
                <h2 className={styles.cardHeading}>Current item/s in your basket</h2>
                {loggedInMember.purchases.map((order, i) => (
                    <div className={styles.flex} key={i}>
                        <div className={styles.carImageContainer}>
                            <img className={styles.carImage}
                                src={`/assets/car-pictures/${order.make}-${order.model}-${order.year}.jpg`}
                                alt={`picture of ${order.make} ${order.model}`}
                                width="200"
                            />
                        </div>
                        <div className={styles.carInfo}>
                            <p><span className={styles.fat}>Make: </span>{order.make}</p>
                            <p><span className={styles.fat}>Model: </span>{order.model}</p>
                            <p><span className={styles.fat}>Year: </span>{order.year}</p>
                        </div>
                        <div className={styles.desc}>
                            <p>{order.descShort}</p>
                        </div>
                        <div className={styles.carPrice}>
                            <p><span className={styles.fat}>Price: </span>${order.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;