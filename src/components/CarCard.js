import React from 'react';
import CarCardStyles from '../styles/CarCardStyles.module.css';

//receiving props from parent CardsWrapper
function CarCard(props) {

    return (
        <div className="col-lg-4 col-sm-6">
            <div className="card h-100" style={{width: "18rem;"}}>
                <img className="card-img-top" src={`../assets/car-pictures/${props.data.make}-${props.data.model}-${props.data.year}.jpg`} alt={props.data.model}/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.make} - {props.data.model}</h5>
                    <p className="card-text">Price: {props.data.price}</p>
                    <p className="card-text" className={CarCardStyles.marginCard}>{props.data.descShort}</p>
                    <a href="#" className={CarCardStyles.btnCard}>Buy</a>
                </div>
            </div>
        </div>

    );
}

export default CarCard;