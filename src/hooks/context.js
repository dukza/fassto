import React from 'react';
import data from './../db/data.json'


export const LayoutContext = React.createContext();

const LayoutProvider = ({children}) => {
    const shops = data.multichannel.shops;

    return(
        <LayoutContext.Provider value={{shops}}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;