import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/formReducer';
import TodoList from './TodoList';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state)
    const [newTodo, setNewTodo] = useState('')

    const handleChange = e => {
        setNewTodo(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        setNewTodo('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-add">
                <input 
                    className="todo-input" 
                    type="text" 
                    name="item" 
                    value={newTodo}
                    onChange={handleChange}
                    placeholder="todo...">
                </input>
                <button 
                    className="addBtn" 
                    onClick={() => dispatch({ type: 'ADD_NEW_TODO', payload: newTodo })}>Add
                </button>
            </div>
            <div>
                <button 
                    className="clearBtn" 
                    onClick={() => dispatch({ type: 'CLEAR_COMPLETED', payload: state})}>Clear Completed
                </button>
            </div>
            <div>
                <TodoList />
            </div>
        </form>
    );
}
export default TodoForm;