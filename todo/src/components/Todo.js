import React from "react";

const Todo = (props) => {
    console.log(props)
    return (
        <div className={`item${props.completed ? 'Completed': ''}`}
            style={props.completed ? {textDecoration: 'line-through'} : null}
            onClick={() => (props.updateTodo(props.item, props))}>
            <button>{props.item}</button>
        </div>

    )
}

export default Todo;