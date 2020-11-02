import React, { useReducer } from "react";
import { initialState, reducer } from '../reducers/formReducer';


const Todo = () => {
    const [state] = useReducer(reducer, initialState);
    console.log(state.todos)
    // return (
    //     <div className={`name${state.todos.completed ? 'Completed': ''}`}
    //         style={state.todos.completed ? {textDecoration: 'line-through'} : null}
    //         onClick={() => dispatch({ type: 'TOGGLE_COMPLETED'})}>
    //         <button>{state.todos.item}</button>
    //     </div>
    // )
    return (
        <div className="todo-list">
            <div className={`name${state.todos.completed ? ' completed' : ''}`}>
                <p className="list-item">{state.todos}</p>
             </div>
        </div>
    );
}

export default Todo;