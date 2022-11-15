import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContex";

function TodoCounter() {
    const { completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} todos</h2>
    );
}

export { TodoCounter };