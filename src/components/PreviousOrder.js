import React, { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import styles from "../styles/PreviousOrder.module.css";

const PreviousOrder = () => {

  const { loggedInMember } = useContext(MemberContext);

  return (
    <div className={styles.cardWrapperContainer}>
      <div className={styles.cardWrapper}>
        {/*Render out each order and its respective cars*/}
        {loggedInMember.purchases.map(order => (
          <div className={styles.order}>
            <h3 className={styles.timestamp}>{order.timestamp.toDateString()}</h3>
            {order.carsPurchased.map((car, i) => (
              <div className={styles.flex} key={i}>
                <div className={styles.carImageContainer}>
                  <img
                    className={styles.carImage}
                    src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
                    alt={`picture of ${order.make} ${order.model}`}
                    width="200"
                  />
                </div>
                <div className={styles.carInfo}>
                  <p>
                    <span className={styles.fat}>Make: </span>
                    {car.make}
                  </p>
                  <p>
                    <span className={styles.fat}>Model: </span>
                    {car.model}
                  </p>
                  <p>
                    <span className={styles.fat}>Year: </span>
                    {car.year}
                  </p>
                </div>
                <div className={styles.desc}>
                  <p>{car.descShort}</p>
                </div>
                <div className={styles.carPrice}>
                  <p>
                    <span className={styles.fat}>Price: </span>${car.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousOrder;
