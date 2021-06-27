import React, { useContext } from 'react'
import { SearchbarContext } from '../../store/SearchbarContextProvider'
import { classes } from '../../utilits/StyleComponent';

const Search = () => {

    const { onChangeSearchBtns } = useContext(SearchbarContext);

    return (
        <React.Fragment>
            <div style={classes.divStyles}>
                <input type="search" className="w-50" style={classes.searchInputStyles} onChange={onChangeSearchBtns} />
            </div>
        </React.Fragment>
    )
}

export default Search
