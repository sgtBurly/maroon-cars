import React, { useContext }from 'react';
import { BasketContext } from '../contexts/BasketContext';
import { CarContext } from '../contexts/CarContext'

// looping over car items(got info from BasketContext), map them to be able to render every chosen item including it's details
const Card = () => {
    const {customerBasket} = useContext(BasketContext);

    return ( 
        <div className="cardcontainer">  
        {customerBasket.map((car, i) => (
            <div className="details-wrapper">
                <div>
                    <img src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`} alt={`picture of ${car.make} ${car.model}`} />
                </div>  
                <div>
                    <p>Make: {car.make}</p>
                    <p>Model: {car.model}</p>
                    <p>Year: {car.year}</p>
                </div>
                <p>Short description: {car.descShort}</p>
                <div>
                    <p>Price: {car.price}</p>
                    <button  className="trash-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        ))}
    </div>
);
}

export default Card;