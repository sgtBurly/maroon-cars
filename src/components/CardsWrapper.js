import CarCard from "./CarCard";
import { CarContext } from "../contexts/CarContext";
import { useContext } from 'react';
import CardsWrapperStyles from '../styles/CardsWrapperStyles.module.css';

function CardWrapper() {
    //cars from carContext
    const { cars } = useContext(CarContext);

    return (
        //looping CarCards

        <div className="container">
            <div className={CardsWrapperStyles.greenBorder}>
                <div className="row">
                {cars && cars.map((car, i) => (
                    //sending props to CarCard
                    <CarCard key={i} data={car} />
                ))}
                </div>
            </div>
        </div>


    )
}

export default CardWrapper;