import CarCard from "./CarCard";
import { CarContext } from "../contexts/CarContext";
import { useContext } from "react";
import NoSearchResult from "./NoSearchResult";

function CardWrapper() {
  //cars from carContext
  const { filteredCars, noResults } = useContext(CarContext);

  return (
    //looping CarCards
    <div className="container mt-4">
      {noResults ? (
        <NoSearchResult />
      ) : (
        <div>
          <div className="row">
            {filteredCars.length > 0 &&
              filteredCars.map((car, i) => (
                //sending props to CarCard
                <CarCard key={i} data={car} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardWrapper;
