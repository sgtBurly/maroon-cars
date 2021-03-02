import CarCard from "./CarCard";
import { CarContext } from "../contexts/CarContext";
import { useContext } from 'react';

function CardWrapper() {
    //cars from carContext
    const { cars } = useContext(CarContext);

    return (
        //looping CarCards
        <div className="card-wrapper">
            {cars && cars.map((car, i) => (
                //sending props to CarCard
                <CarCard key={i} data={car} />
            ))}
        </div>

    )
}

export default CardWrapper;