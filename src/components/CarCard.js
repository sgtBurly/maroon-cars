import React from 'react';
import CarCardStyles from '../styles/CarCardStyles.module.css';
import { useHistory } from "react-router-dom";

//receiving props from parent CardsWrapper
function CarCard(props) {

//Saving the history hook in a variable
const historyHook = useHistory();

const clickToRender = () => {
    //Using the cars unique vin-number to push to new route with the historyHook variable
    historyHook.push(`/details/${props.data.vin}`)
}

    return (
        <div className="col-lg-4 col-sm-6 mb-3">
            {/* adding clickToRender functon on carCard */}
            <div className={`${CarCardStyles.cardHover} card h-100`} onClick={clickToRender}>
                <img className={`${CarCardStyles.imgHover} card-img-top`} src={`../assets/car-pictures/${props.data.make}-${props.data.model}-${props.data.year}.jpg`} alt={props.data.model}/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.make} - {props.data.model}</h5>
                    <p className={CarCardStyles.price}>Price: {props.data.price}</p>
                    <p className={`${CarCardStyles.marginCard} card-text`}>{props.data.descShort}</p>
                    <button type="button" className={CarCardStyles.btnCard}>Buy</button>
                </div>
            </div>
        </div>

    );
}

export default CarCard;