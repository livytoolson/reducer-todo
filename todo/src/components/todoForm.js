import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/formReducer';
import TodoList from './TodoList';
import { addTodo, clearTodo, toggleTodo } from '../actions/formActions';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
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
                    onClick={() => dispatch(addTodo())}>Add
                    {/* onClick={() => dispatch({ type: 'ADD', payload: newTodo })} */}
                </button>
            </div>
            <div>
                <button 
                    className="clearBtn" 
                    onClick={() => dispatchEvent(clearTodo())}>Clear Completed
                    {/* onClick={() => dispatch({ type: 'CLEAR', payload: state})} */}
                </button>
            </div>
            <div>
                <TodoList todos={state.todos}/>
            </div>
        </form>
    );
}
export default TodoForm;