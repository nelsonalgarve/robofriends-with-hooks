import React from "react";



const SearchBox = ({onSearchChange}) => {

        function handleInput(e) {
        const filter = e.target.value.trim().toLowerCase();
        onSearchChange(filter);
    }
    return (
        <div className="pa2">
            <input
                onInput={handleInput}
                className="pa3 ba b--green bg-lightest-blue"
                type='search' 
                placeholder="search robots" />
        </div>
    )
}

export default SearchBox;