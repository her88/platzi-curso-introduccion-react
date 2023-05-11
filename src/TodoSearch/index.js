import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue, loading}) {

    const onChangeValueSearch = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onChangeValueSearch}
            disabled={loading}
        />
    );
}

export { TodoSearch };