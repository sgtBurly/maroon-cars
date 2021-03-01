import React, { useState, createContext} from 'react';

export const BasketContext = createContext();

export const BasketProvider = (props) => {
    // const [cars, setCars] = useState([
    //     {objects come here}
    // ]);

    //const values come here

return (
    <BasketContext.Provider /*value = {values}*/>
        {props.children}
    </BasketContext.Provider>
)
}

export default BasketProvider;
