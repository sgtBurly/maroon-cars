import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import CarCardStyles from '../styles/CarCardStyles.module.css';

//receiving props from parent CardsWrapper
function CarCard(props) {

    const { addToBasket } = useContext(BasketContext);

    return (
        <div className="col-lg-4 col-sm-6 mb-3">
            <div className={`${CarCardStyles.cardHover} card h-100`}>
                <img className={`${CarCardStyles.imgHover} card-img-top`} src={`../assets/car-pictures/${props.data.make}-${props.data.model}-${props.data.year}.jpg`} alt={props.data.model}/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.make} - {props.data.model}</h5>
                    <p className={CarCardStyles.price}>Price: {props.data.price}</p>
                    <p className={`${CarCardStyles.marginCard} card-text`}>{props.data.descShort}</p>
                    <button type="button" className={CarCardStyles.btnCard} onClick={() => addToBasket(props.data)}>Add to cart</button>
                </div>
            </div>
        </div>

    );
}

export default CarCard;