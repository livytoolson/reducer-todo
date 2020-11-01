import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/formReducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)

    // handleChange = e => {

    // };

    // handleSubmit = e => {
    //     e.preventDefault();
    // };

    return (
        <form>
            <div className="input-add">
                <input 
                    className="todo-input" 
                    type="text" 
                    name="item" 
                    placeholder="todo...">
                </input>
                <button className="addBtn" >Add</button>
                {/* <button className="addBtn" onClick={() => dispatch( type: 'ADD_NEW_TODO')}>Add</button> */}
            </div>
            <div>
                <button className="clearBtn">Clear Completed</button>
                {/* <button className="clearBtn" onClick={() => dispatch( type: 'CLEAR_COMPLETED')}></button> */}
            </div>
        </form>
    );
}
export default TodoForm;