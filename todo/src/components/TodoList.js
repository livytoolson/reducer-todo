import React from 'react';
import Todo from "./Todo";

const TodoList = (props) => {

return (
    <div>
        {props.todos.map((todo) => (
        <Todo 
          key={todo.id}
          name={todo.item}
          completed={todo.completed}
          />
          // onclick={() => dispatch({ type: 'TOGGLE'})} 
      ))}
    </div>
    );
};

export default TodoList;