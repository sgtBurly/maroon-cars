import { useContext, useState, useEffect } from 'react';


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
    <div className="car-details">
      <img src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`} alt={`picture of ${car.make} ${car.model}`} />
      <p>{car.make}</p>
      <p>{car.model}</p>
      <p>{car.year}</p>
      <p>{car.descLong}</p>
      <p>{car.price}</p>
      <p>{car.miles}</p>
    </div>
  );
}

export default Details;