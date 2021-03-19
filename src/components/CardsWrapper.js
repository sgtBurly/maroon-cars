import CarCard from "./CarCard";
import { CarContext } from "../contexts/CarContext";
import { useContext } from 'react';
import CardsWrapperStyles from '../styles/CardsWrapperStyles.module.css';

function CardWrapper() {
    //cars from carContext
    // const test = true;

    const { filteredCars, cars } = useContext(CarContext);
    return (
        //looping CarCards
        <div className="container mt-4">
            <div className="row">
                 {filteredCars && filteredCars.map((car, i) => (
                     //sending props to CarCard
                     <CarCard key={i} data={car} />
                 ))}
            </div> 
        </div>
)}

export default CardWrapper;