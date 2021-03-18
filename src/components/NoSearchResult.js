import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import styles from '../styles/NoSearchResult.module.css'
import CarCard from './CarCard';

const NoSearchResult = () => {

  const { recommendedCars } = useContext(CarContext);

  return (
    <div className={styles.nosearchContainer}>
      <p>No results... Try again!</p>
      <div>
        <h2>But here are some other cars we think you'll like:</h2>
        <div className="row">
          {recommendedCars && recommendedCars.map((car,i) => <CarCard key={i} data={car}/>)}
        </div>

      </div>
    </div>
  );
}

export default NoSearchResult;