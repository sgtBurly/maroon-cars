import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import CarCardStyles from '../styles/CarCardStyles.module.css';
import { useHistory } from "react-router-dom";

//receiving props from parent CardsWrapper
function CarCard(props) {
    const { addToBasket } = useContext(BasketContext);
    //Saving the history hook in a variable
    const historyHook = useHistory();

    const clickToRender = () => {
        //Using the cars unique vin-number to push to new route with the historyHook variable
        historyHook.push(`/details/${props.data.vin}`)
    }

    const handleClick = (e) => {
        e.stopPropagation();
        addToBasket(props.data);
    }
    
    return (
        <div className="col-lg-4 col-sm-6 mb-3">
            <div className={`${CarCardStyles.carCard} h-100`} onClick={clickToRender}>

            {/* Checks if car on discount, if so, then put a sale icon on the picture */}
            {props.data.discount && <div className={CarCardStyles.saleIcon} >
            <img src={`/assets/sale-icon.png`} alt="sale icon"/>
            </div>}

                <img className={`${CarCardStyles.img} card-img-top`} src={`../assets/car-pictures/${props.data.make}-${props.data.model}-${props.data.year}.jpg`} alt={props.data.model}/>

                <div className="card-body">
                    <h5 className="card-title"><span>{props.data.make}  {props.data.model}</span></h5>
                    <p className={CarCardStyles.price}><span>Price: </span>${props.data.price}</p>
                    <p className={CarCardStyles.year}><span>Year: </span>{props.data.year}</p>
                    <p className={CarCardStyles.miles}><span>Miles: </span>{props.data.miles}</p>
                    <p className={`${CarCardStyles.descShort} card-text`}>{props.data.descShort}</p>
                    <span className={CarCardStyles.iconWrapper}>
                        <i className="fas fa-cart-plus" onClick={handleClick}></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CarCard;