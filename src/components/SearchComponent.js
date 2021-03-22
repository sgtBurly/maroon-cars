import React, {useState, useContext, useEffect} from 'react'
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/SearchComponentStyles.module.css';
import {CarContext} from "../contexts/CarContext";

const SearchComponent = () => {
    const { sendSearchData, makesAndModels } = useContext(CarContext);

    const minPrice = 0;
    const maxPrice = 1000000;
    const minMiles = 0;
    const maxMiles = 100000;
    const minYear = 1960;
    const maxYear = 2021;

    const initFilterOpts = () => {
        if ('filterOptions' in localStorage) {
            return JSON.parse(localStorage.getItem('filterOptions'));
        } else {
            return {
                make: "",
                model: "",
                price: [minPrice, maxPrice],
                miles: [minMiles, maxMiles],
                year: [minYear, maxYear],
                textSearch: "",
                isActive: false,
                modelOptions: null
            }
        }
    }
    const [filterOptions, setFilterOptions] = useState(initFilterOpts());

    useEffect(() => {
        localStorage.setItem('filterOptions', JSON.stringify(filterOptions));
        // When change in filterOptions, it is sent to CarContext.
        sendSearchData(filterOptions);
    },[filterOptions]);

    //function fired on submit, it sends the filter variables
    //into an empty object and then sends the object to CarContext.
    const handleSearch = e => {
        e.preventDefault();
        sendSearchData(filterOptions);
    }

    const handleClear = () => {
        setFilterOptions({
            make: "",
            model: "",
            price: [minPrice, maxPrice],
            miles: [minMiles, maxMiles],
            year: [minYear, maxYear],
            textSearch: "",
            isActive: false,
            modelOptions: null
        })
        //Resets form
        document.querySelector("#filterForm").reset()
        sendSearchData({
            reset: true,
        })
    }

    const toggleFilter = () =>  setFilterOptions(prevState => ({...prevState, isActive: !prevState.isActive}));
    const textSearchHandler = e => setFilterOptions(prevState => ({...prevState, textSearch: e.target.value}));
    const handlePriceChange = (e, newValue) => setFilterOptions(prevState => ({...prevState, price: newValue}));
    const handleYearChange = (e, newValue) => setFilterOptions(prevState => ({...prevState, year: newValue}));
    const handleMilesChange = (e, newValue) => setFilterOptions(prevState => ({...prevState, miles: newValue}));
    const handleModelChange = e => setFilterOptions(prevState => ({...prevState, model: e.target.value}));
    const handleMakeChange = e => {
        setFilterOptions(prevState => ({...prevState, model: "", make: e.target.value}));
        if(filterOptions.modelOptions) document.querySelector('#model').value = "";
        if(e.target.value !== "") {
            const selectedIndex = e.target.options.selectedIndex;
            //Saving makes index
            const makeIndex = e.target.options[selectedIndex].getAttribute("data-key");
            setFilterOptions(prevState => ({...prevState, modelOptions: Array.from(makesAndModels[makeIndex].models)}))
        } else {
            setFilterOptions(prevState => ({...prevState, modelOptions: null}));
        }
    }

    return (
        <div className={styles.searchComponent}>
            <form onSubmit={handleSearch} className={styles.formContainer} id="filterForm">
            <h4 className={styles.searchHeader}>Find your dream car</h4>
                <div className={styles.searchBarWrapper}>
                    <span className={styles.inputWrapper}>
                        <input
                        type="text"
                        placeholder='Search...'
                        value={filterOptions.textSearch}
                        className={styles.searchInput}
                        onChange={textSearchHandler}
                        />
                        <button className={styles.searchButton}>
                            <i className={`fas fa-search ${styles.searchIcon}`}></i>
                        </button>
                    </span>
                    <button type="button" onClick={toggleFilter} className={styles.toggleFilterBtn} >Filter {filterOptions.isActive ? <span>&uarr;</span> : <span>&darr;</span>}</button>
                </div>

                {/* only show this part if formToggler is true */}
                { filterOptions.isActive ? (
                    <div className={styles.filterWrapper}>
                        <div className={styles.slidersFlexWrapper}>
                            <div className={styles.sliderWrapper}>
                                <div className={styles.labelWrapper}>
                                    <label>Price:</label>
                                </div>
                                <div className={styles.filterSlider}>
                                    <Slider
                                        value={filterOptions.price}
                                        min={minPrice}
                                        max={maxPrice}
                                        valueLabelDisplay="on"
                                        aria-labelledby="range-slider"
                                        onChange={handlePriceChange}
                                        className={styles.slider}
                                    />
                                </div>
                            </div>

                            <div className={styles.sliderWrapper}>
                                <div className={styles.labelWrapper}>
                                    <label >Year:</label>
                                </div>
                                <div className={styles.filterSlider}>
                                    <Slider
                                        value={filterOptions.year}
                                        min={minYear}
                                        max={maxYear}
                                        valueLabelDisplay="on"
                                        aria-labelledby="range-slider"
                                        onChange={handleYearChange}
                                        className={styles.slider}
                                    />
                                </div>
                            </div>


                            <div className={styles.sliderWrapper}>
                                <div className={styles.labelWrapper}>
                                    <label >Miles:</label>
                                </div>
                                <div className={styles.filterSlider}>
                                    <Slider
                                        value={filterOptions.miles}
                                        min={minMiles}
                                        max={maxMiles}
                                        valueLabelDisplay="on"
                                        aria-labelledby="range-slider"
                                        onChange={handleMilesChange}
                                        className={styles.slider}
                                    />
                                </div>
                            </div>
                        </div>


                        <div className={styles.makeModelButtonsFlexWrapper}>
                            <div className={styles.makeModelWrapper}>
                                <div className={styles.makeWrapper} >
                                    <label className={styles.labelMake}>Make:</label>
                                    <select name="make" id="make" onChange={handleMakeChange} className={styles.select} value={filterOptions.make}>
                                        <option value="">Choose a make</option>
                                        {makesAndModels && makesAndModels.map((obj, i) => (
                                            <option value={obj.make} key={i} data-key={i}>{obj.make}</option>
                                        ))}
                                    </select>
                                </div>

                            {/*Model shows only when make is picked */}
                            {filterOptions.make &&
                                <div className={styles.modelWrapper}>
                                    <label className={styles.labelModel}>Model:</label>
                                    <select name="model" id="model" onChange={handleModelChange} className={styles.select} value={filterOptions.model}>
                                        <option value="">Choose a model</option>
                                            {filterOptions.modelOptions && filterOptions.modelOptions.map((model, i) => (
                                                <option value={model} key={i}>{model}</option>
                                                ))}
                                    </select>
                                </div>
                            }
                            </div>

                            <div className={styles.buttonsWrapper}>
                                <button type="button" onClick={handleClear} className={styles.clearFilterBtn} >Clear filter</button>
                                <button type="submit" className={styles.applyFilterBtn}>Apply filter</button>
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