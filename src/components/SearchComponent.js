import React, {useState} from 'react'
import { Slider } from '@material-ui/core';
import styles from '../styles/SearchComponentStyles.module.css';


const SearchComponent = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search completed')
    }

    const handleClear = () => {
        console.log('form has been cleared');
    }

    const [price, setPrice] = useState([null, null]);
    const [miles, setMiles] = useState([null, null]);
    const [year, setYear] = useState([null, null]);

    const handlePriceChange = (e, newValue) => {
        setPrice(newValue);
        console.log("this is price ", price);
      };

    const handleYearChange = (e, newValue) => {
        setYear(newValue);
        console.log("this is year: ", year );
    }

    const handleMilesChange = (e, newValue) => {
        setMiles(newValue);
        console.log("this is miles: ", miles);
    }

    return ( 
        <div className={styles.searchComponent}>
            <form 
            onSubmit={handleSearch}
            className={styles.formContainer}
            >
                <input 
                type="text"
                placeholder='Search...'
                className={styles.searchInput}
                 />
                 <button type="button">Filter</button>
                <div className={styles.filterWrapper}>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.labelWrapper}>
                            <label for="vol">Price:</label>
                        </div>
                        <div className={styles.priceSlider}>
                            <Slider
                                value={price}
                                min={0}
                                max={1000000}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                onChange={handlePriceChange}
                            />
                        </div> 
                    </div>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.label}>
                            <label for="vol">Miles:</label>
                            <div className={styles.valueOutputWrapper}>
                                <span>Min</span>
                                <div className={styles.valueOutputBox}></div>
                                <span>Max</span>
                                <div className={styles.valueOutputBox}></div>
                            </div>
                        </div>
                        <div className={styles.milesSlider}>
                            <Slider
                                value={miles}
                                min={0}
                                max={100000}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                onChange={handleMilesChange}
                            />
                        </div>
                    </div>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.label}>
                            <label>Year:</label>
                            <div className={styles.valueOutputWrapper}>
                                <span>Min</span>
                                <div className={styles.valueOutputBox}></div>
                                <span>Max</span>
                                <div className={styles.valueOutputBox}></div>
                            </div>
                        </div>
                        <div className={styles.sliderWrapper}>
                            <Slider
                                value={year}
                                min={1930}
                                max={2020}
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
                        <button type="button" onClick={handleClear}>Clear filter</button>
                        <button type="submit" >Apply filter</button>
                    </div>
                </div>    
            </form>
        </div>
     );
    }

export default SearchComponent;

/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
*/