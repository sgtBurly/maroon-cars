import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import styles from '../styles/NoSearchResult.module.css'
import CarCard from './CarCard';

const NoSearchResult = () => {

  const { recommendedCars } = useContext(CarContext);

  return (
    <div className={styles.nosearchContainer}>
      <h3>Sorry, no match found..</h3>
      <div className={styles.recommendedContainer}>
        <p className={styles.lead}>Recommended cars for you:</p>
        <div className="row">
          {recommendedCars && recommendedCars.map((car,i) => <CarCard key={i} data={car}/>)}
        </div>
      </div>
    </div>
  );
}

export default NoSearchResult;