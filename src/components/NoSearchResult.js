import { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import styles from "../styles/NoSearchResult.module.css";
import CarCard from "./CarCard";

const NoSearchResult = () => {
  const { recommendedCars } = useContext(CarContext);

  return (
    <div className={styles.nosearchContainer}>
      <h3>Sorry, no matching cars found...</h3>
      <div className={styles.recommendedContainer}>
        <p className={styles.lead}>Recommended cars:</p>
        <div className="row">
          {recommendedCars.length > 0 &&
            recommendedCars.map((car, i) => <CarCard key={i} data={car} />)}
        </div>
      </div>
    </div>
  );
};

export default NoSearchResult;
