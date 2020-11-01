import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/formReducer';

const TodoForm = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState('')

    // handleChange = e => {

    // };

    // handleSubmit = e => {
    //     e.preventDefault();
    //     state({
    //         input: ''
    //     })
    // };

    return (
        <form>
            <div className="input-add">
                <input 
                    className="todo-input" 
                    type="text" 
                    name="item" 
                    value={newTodo}
                    placeholder="todo...">
                </input>
                <button className="addBtn" onClick={() => dispatch({ type: 'ADD_NEW_TODO' })}>Add</button>
            </div>
            <div>
                <button className="clearBtn" onClick={() => dispatch({ type: 'CLEAR_COMPLETED', payload: todos})}>Clear Completed</button>
            </div>
        </form>
    );
}
export default TodoForm;