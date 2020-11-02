import React from 'react';
import Todo from "./Todo";

const TodoList = (props) => {

  let toggleItem = props.toggleItem
  let todoList = props.todos

return (
    <div>
        {todoList.map((todo) => (
        <Todo 
          key={todo.id}
          todo={todo}
          toggleItem={toggleItem}
          />
      ))}
    </div>
    );
};

export default TodoList;