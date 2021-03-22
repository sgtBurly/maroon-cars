import CarCard from "./CarCard";
import { CarContext } from "../contexts/CarContext";
import { useContext } from 'react';
import CardsWrapperStyles from '../styles/CardsWrapperStyles.module.css';
import NoSearchResult from "./NoSearchResult";

function CardWrapper() {
    //cars from carContext
    const { filteredCars, noResults } = useContext(CarContext);

    return (
        //looping CarCards
        <div className="container mt-4">
            {noResults ? <NoSearchResult /> : <div className={CardsWrapperStyles.greenBorder}>
                <div className="row">
                 {filteredCars && filteredCars.map((car, i) => (
                     //sending props to CarCard
                    <CarCard key={i} data={car} />
                ))}
                </div>
            </div>}
        </div>
)}

export default CardWrapper;