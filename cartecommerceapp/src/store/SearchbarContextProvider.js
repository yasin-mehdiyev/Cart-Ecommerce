import React, { createContext, useState } from 'react';

export const SearchbarContext = createContext();

const SearchbarContextProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const onChangeSearchBtns = (ev) => {
        setSearchTerm(ev.target.value);
    };

    return (
        <SearchbarContext.Provider value={{ searchTerm, onChangeSearchBtns }}>
            {children}
        </SearchbarContext.Provider>
    )
}

export default SearchbarContextProvider
