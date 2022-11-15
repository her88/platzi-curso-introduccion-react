import React from "react";
import { TodoContext } from "../TodoContex";
import './TodoSearch.css';

function TodoSearch() {

    const {searchValue,setSearchValue} = React.useContext(TodoContext);

    const onChangeValueSearch = (event) => {
        //console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onChangeValueSearch}
        />
    );
}

export { TodoSearch };