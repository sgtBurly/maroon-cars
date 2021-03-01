import { CarContext } from "../contexts/CarContext";
import React, { useContext } from 'react';

//importing bootstrap, not sure if correct
import Card from 'react-bootstrap/Card';

const CarCard = () => {
// Possible variables from carContext
const { cars } = useContext(CarContext);

    return (
        <div className="card" style="width 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some Text blblabla</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default CarCard;