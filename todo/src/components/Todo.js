import React from "react";

const Todo = (props) => {
    return (
        <div className={`item${      props.todo.completed ? 'Completed': ''      }`}
            style={props.todo.completed ? {textDecoration: 'line-through'} : null}
            onClick={() => (props.updateTodo(props.i, props.todo))}>
            <button>{props.todo.item}</button>
        </div>

    )
}

export default Todo;