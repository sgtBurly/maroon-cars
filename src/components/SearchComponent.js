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

    const handleApply = () => {
        console.log("Filters have been applyed");
    }

    const [price, setPrice] = useState([50000, 800000]);
    const [miles, setMiles] = useState([0, 100000]);
    const [year, setYear] = useState([1970, 2021]);

    const [isActive, setIsActive] = useState(true)

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

    const toggleFilter = () => {
        setIsActive(!isActive)
        console.log('is active ',isActive)
    }

    return (
        <div className={styles.searchComponent}>
            <form
            onSubmit={handleSearch}
            className={styles.formContainer}
            >
                <div className={styles.searchBarWrapper}>
                    <input
                    type="text"
                    placeholder='Search...'
                    className={styles.searchInput}
                    />
                    <button type="button" onClick={toggleFilter}>Filter</button>
                </div>

                {/* only show this part if formToggler is truthy */}
                { !isActive ? (
                    <div className={styles.filterWrapper}>
                        <div className={styles.filterLeft}>
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
                        </div>
                        <div className={styles.filterRight}>
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
                            <div>
                                <div className={styles.makeModeldropDowns}>
                                    <div className={styles.makeWrapper}>
                                        <label>Make:</label>
                                        <select className={styles.dropDown} name="make" id="make">
                                            <option value="volvo">Volvo</option>
                                        </select>
                                    </div>
                                    <div className={styles.modelWrapper}>
                                        <label>Model:</label>
                                        <select className={styles.dropDown} name="model" id="model">
                                            <option value="V40">V40</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="button" onClick={handleClear}>Clear filter</button>
                                <button type="submit" onClick={handleApply}>Apply filter</button>
                            </div>
                        </div>
                    </div>
                // If not, show an empty div
                ) : (
                    <div></div>
                )}
            </form>
        </div>
     );
    }

export default SearchComponent;