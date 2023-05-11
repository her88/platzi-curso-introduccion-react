import React from 'react';
import './TodoForm.css';

function TodoForm({addTodo, setOpenModal}) {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escriba una nueva tarea</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Ingresa la descripcion de la tarea' />

            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>

                <button
                    type='onSubmit'
                    className="TodoForm-button TodoForm-button--add"
                    disabled={!newTodoValue}>
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };