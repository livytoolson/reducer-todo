import React from 'react';
import Todo from "./Todo";
import { initialState } from '../reducers/formReducer';

const TodoList = () => {
  console.log(initialState.todostodos)

return (
    <div>
        {initialState.todos.map(todo => (
        <Todo 
          key={todo.id}
          name={todo.item} />
      ))}
    </div>
    );
};

export default TodoList;