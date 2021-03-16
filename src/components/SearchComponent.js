import React from 'react'
import { Slider } from '@material-ui/core';


const SearchComponent = () => {
    const handleSearch = ()=>{
        console.log('Search completed')
    }
    return ( 
        <div>
            <Slider
                value={5}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
            <form onSubmit={handleSearch}>
                <input type="text"
                 placeholder='Search.. .'
                 />
                <div className={styleMedia.priceSlider}>
                    <div className={styleMedia.lable}>
                        <label for="vol">Price:</label>
                        <div>
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                    </div>
                    <input type="range" id="price" name="price" min="0" max="50" />
                </div>
                <div className={styleMedia.milesSlider}>
                    <div className={styleMedia.lable}>
                        <label for="vol">Miles:</label>
                        <div>
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                    </div>
                    <input type="range" id="miles" name="miles" min="0" max="50" />
                </div>
                <div className={styleMedia.yearSlider}>
                    <div className={styleMedia.lable}>
                        <label for="vol">Year:</label>
                        <div>
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                    </div>
                    <input type="range" id="year" name="year" min="0" max="50" />
                </div> 
                
                <div>
                    <div>
                        <label for="make">Make:</label>
                        <select name="make" id="make">
                            <option value="volvo">Volvo</option>
                        </select>
                    </div> 
                    <div>
                        <label for="model">Model:</label>
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