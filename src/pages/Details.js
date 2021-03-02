import { useContext, useState, useEffect } from 'react';
import styles from '../styles/Details.module.css'

const Details = () => {

  const car = {
    make: "Chevrolet",
    model: "Camaro",
    year: 1973,
    vin: "1D4PT5GK0BW487259",
    city: "Santa Rosa",
    descShort: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
    descLong: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 554963,
    miles: 15432
  }


  return (
    <div className={styles.carDetailsWrapper}>
      <div className={styles.imgContainer}>
        <img src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`} alt={`picture of ${car.make} ${car.model}`} />
      </div>
        <div className={styles.infoContainer}>
          <h1>{car.make} {car.model}</h1>
          <p className={styles.price}>${car.price}</p>
          <p>Model year: {car.year}</p>
          <p>Miles: {car.miles}</p>
          <p className={styles.desc}>{car.descLong}</p>
          <p>City: {car.city}</p>
          <p>VIN: {car.vin}</p>
          {/* Adding 'Add to cart'-button with functionality later */}
          <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
}

export default Details;