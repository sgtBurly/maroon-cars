import React, { useContext }from 'react';
import { BasketContext } from '../contexts/BasketContext'

// need props for recieving card items from BasketContext
const Card = (props) => {
    const [cards, setCards] = useContext(BasketContext);


    return ( 
        <div className="card">
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <p>Make</p>
                <p>Model</p>
                <p>Year</p>
            </div>
            <p>short desc</p>
        </div>
    );
}
 
export default Card;