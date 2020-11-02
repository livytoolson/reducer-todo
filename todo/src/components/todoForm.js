import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/formReducer';
import TodoList from './TodoList';
import { setNewTodo, setClearTodo, setToggle } from '../actions/formActions';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputText, setInputText] = useState('')
    console.log(state)

    const handleChange = e => {
        setInputText(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setNewTodo(inputText));
        setInputText('');
    };

    // const handleToggle = () => {

    // }

    const handleClear = (e) => {
        e.preventDefault();
        dispatch(setClearTodo());
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-add">
                <input 
                    className="todo-input" 
                    type="text" 
                    name="item" 
                    value={inputText.item}
                    onChange={handleChange}
                    placeholder="todo...">
                </input>
                <button 
                    className="addBtn" type="submit">Add
                </button>
            </div>
            <div>
                <button 
                    className="clearBtn" 
                    onClick={handleClear}>Clear Completed
                </button>
            </div>
            <div>
                <TodoList todos={state.todos}/>
            </div>
        </form>
    );
}
export default TodoForm;