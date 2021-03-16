import React, {useState} from 'react'
import { Slider } from '@material-ui/core';
import styles from '../styles/SearchComponentStyles.module.css';


const SearchComponent = () => {

    const handleSearch = () => {
        console.log('Search completed')
    }

    const [price, setPrice] = useState([20, 37]);
    const [miles, setMiles] = useState([1, 100]);
    const [year, setYear] = useState([1, 100]);

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
      };

    const handleYearChange = (event, newValue) => {
        setYear(newValue);
    }

    const handleMilesChange = (event, newValue) => {
        setMiles(newValue);
    }



    return ( 
        <div>
            <form onSubmit={handleSearch}>
                <input type="text"
                 placeholder='Search...'
                 />
                <div className={styles.sliderWrapper}>
                    <div className={styles.labelWrapper}>
                        <label for="vol">Price:</label>
                        <div>
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                    </div>
                    <div className={styles.priceSlider}>
                        <Slider
                            value={price}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            onChange={handlePriceChange}
                        />
                    </div> 
                </div>
                <div className={styles.sliderWrapper}>
                    <div className={styles.label}>
                        <label for="vol">Miles:</label>
                        <div>
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                    </div>
                    <div className={styles.milesSlider}>
                        <Slider
                            value={miles}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            onChange={handleMilesChange}
                        />
                    </div>
                </div>
                <div className={styles.sliderWrapper}>
                    <div className={styles.label}>
                        <label>Year:</label>
                        <div>
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                    </div>
                    <div className={styles.sliderWrapper}>
                        <Slider
                            value={year}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            onChange={handleYearChange}
                        />
                    </div>
                </div> 
                
                <div>
                    <div>
                        <label>Make:</label>
                        <select name="make" id="make">
                            <option value="volvo">Volvo</option>
                        </select>
                    </div> 
                    <div>
                        <label>Model:</label>
                        <select name="model" id="model">
                            <option value="V40">V40</option>
                        </select>
                    </div> 
                    <button>Clear filter</button>
                    <button>Apply filter</button>
                </div>    
            </form>
        </div>
     );
    }

export default SearchComponent;