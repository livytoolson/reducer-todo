import React, { useReducer } from 'react';
import Todo from "./Todo";
import { initialState, reducer } from '../reducers/formReducer';

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.todos)

return (
    <div>
        {state.todos.map(todo => (
        <Todo 
          key={todo.id}
          name={todo.item}
          onclick={() => dispatch({ type: 'TOGGLE_COMPLETED'})} />
      ))}
    </div>
    );
};

export default TodoList;