import React, {useState, useContext} from 'react'
import { Slider } from '@material-ui/core';
import styles from '../styles/SearchComponentStyles.module.css';
import {CarContext} from "../contexts/CarContext";

const SearchComponent = () => {

    const {sendSearchData, makesAndModels} = useContext(CarContext);

    const minPrice = 10;
    const maxPrice = 200

    //declaring vaiables use in search component
    const [make, setMake] = useState("");
    const [price, setPrice] = useState([minPrice, maxPrice]);
    const [miles, setMiles] = useState([null, null]);
    const [year, setYear] = useState([null, null]);
    const [textSearch, setTextSearch] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [model, setModel] = useState("");
    const [modelOptions, setModelOptions] = useState(null);

    //function fired on submit, it sends the filter variables
    //into an empty object and then sends the object to CarContext.
    const handleSearch = e => {
        e.preventDefault();
        const filterOptions = {
            price,
            miles,
            year,
            textSearch
        }
        console.log('Search completed');
        sendSearchData(filterOptions);
    }

    const handleClear = () => {
        console.log('form has been cleared');
    }

    const handleApply = () => {
        console.log("Filters have been applyed");
    }
    const toggleFilter = () =>  setIsActive(!isActive);
    const textSearchHandler = e => setTextSearch(e.target.value);
    const handlePriceChange = (e, newValue) => setPrice(newValue);
    const handleYearChange = (e, newValue) => setYear(newValue);
    const handleMilesChange = (e, newValue) => setMiles(newValue);

    const handleMakeChange = (e) => {
        setMake(e.target.value);
        if(e.target.value !== "") {
            const selectedIndex = e.target.options.selectedIndex;
            //Saving makes index
            const makeIndex = e.target.options[selectedIndex].getAttribute("data-key");
            setModelOptions(makesAndModels[makeIndex].models)
        } else {
            setModelOptions(null);
        }
    }
    const handleModelChange = e => setModel(e.target.value);

    return (
        <div className={styles.searchComponent}>
            <form onSubmit={handleSearch} className={styles.formContainer}>
                <div className={styles.searchBarWrapper}>
                    <span className={styles.inputWrapper}>
                        <input
                        type="text"
                        placeholder='Search...'
                        className={styles.searchInput}
                        onChange={textSearchHandler}
                        />
                        <button className={styles.searchButton}>
                            <i className={`fas fa-search ${styles.searchIcon}`}></i>
                        </button>
                    </span>
                    <button type="button" onClick={toggleFilter}>Filter {isActive ? <span>&uarr;</span> : <span>&darr;</span>}</button>
                </div>

                {/* only show this part if formToggler is truthy */}
                { isActive ? (
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
                                <label >Make:</label>
                                <select name="make" id="make" onChange={handleMakeChange}>
                                    <option value="">Choose a Make</option>
                                    {makesAndModels && makesAndModels.map((obj, i) => (
                                        <option value={obj.make} key={i} data-key={i}>{obj.make}</option>
                                    ))}
                                </select>
                            </div>
                            {/*Model shows only when make is picked */}
                            {modelOptions &&
                                <div>
                                    <label>Model:</label>
                                    <select name="model" id="model" onChange={handleModelChange}>
                                    <option value="">Choose a Model</option>
                                        {modelOptions.map((model, i) => (
                                            <option value={model} key={i}>{model}</option>
                                        ))}
                                    </select>
                                </div>}
                            <button type="button" onClick={handleClear}>Clear filter</button>
                            <button type="submit" onClick={handleApply}>Apply filter</button>
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