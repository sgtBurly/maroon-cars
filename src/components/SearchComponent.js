import React, {useState, useContext} from 'react'
import { Slider } from '@material-ui/core';
import styles from '../styles/SearchComponentStyles.module.css';
import { CarContext } from "../contexts/CarContext";

const SearchComponent = () => {

    const { makesAndModels } = useContext(CarContext);

    const [price, setPrice] = useState([50000, 800000]);
    const [miles, setMiles] = useState([0, 100000]);
    const [year, setYear] = useState([1970, 2021]);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search completed')
    }

    const handleClear = () => {
        console.log('form has been cleared');
    }

    const handleApply = () => {
        console.log("Filters have been applyed");
    }

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

    const handleMakeChange = (e) => {
        setMake(e.target.value);
        const selectedIndex = e.target.options.selectedIndex;
        //Saving makes index
        const makeIndex = e.target.options[selectedIndex].getAttribute("data-key");
        setModel(makesAndModels[makeIndex].models)
        console.log("this is make:", make)
    }

    return (
        <div className={styles.searchComponent}>
            <form
            onSubmit={handleSearch}
            className={styles.formContainer}
            >
                <div className={styles.searchAndFilterWrapper}>
                    <input
                    type="text"
                    placeholder='Search...'
                    className={styles.searchInput}
                    />
                    <button type="button">Filter</button>
                </div>
                <div className={styles.filterWrapper}>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.labelWrapper}>
                            <label>Price:</label>
                        </div>
                        <div className={styles.filterSlider}>
                            <Slider
                                value={price}
                                min={50000}
                                max={800000}
                                valueLabelDisplay="on"
                                aria-labelledby="range-slider"
                                onChange={handlePriceChange}
                            />
                        </div>
                    </div>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.labelWrapper}>
                            <label >Miles:</label>
                        </div>
                        <div className={styles.filterSlider}>
                            <Slider
                                value={miles}
                                min={0}
                                max={100000}
                                valueLabelDisplay="on"
                                aria-labelledby="range-slider"
                                onChange={handleMilesChange}
                            />
                        </div>
                    </div>
                    <div className={styles.filterWrapper}>
                        <div className={styles.sliderWrapper}>
                            <div className={styles.labelWrapper}>
                                <label >Year:</label>
                            </div>
                            <div className={styles.filterSlider}>
                                <Slider
                                    value={year}
                                    min={1970}
                                    max={2021}
                                    valueLabelDisplay="on"
                                    aria-labelledby="range-slider"
                                    onChange={handleYearChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label >Make:</label>
                                <select name="make" id="make" onChange={handleMakeChange}>
                                    <option value="">Choose a Make</option>
                                    {makesAndModels && makesAndModels.map((obj, i) => (
                                        <option value={obj.make} key={i} data-key={i}>{obj.make}</option>
                                    ))}
                                </select>
                            </div>
                            {make &&
                                <div>
                                    <label  >Model:</label>
                                    <select name="model" id="model">
                                    <option value="">Choose a Model</option>
                                        {model.map((model, i) => (
                                            <option value={model} key={i}>{model}</option>
                                        ))}
                                    </select>
                                </div>}
                            <button type="button" onClick={handleClear}>Clear filter</button>
                            <button type="submit" onClick={handleApply}>Apply filter</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
     );
    }

export default SearchComponent;