import React from "react";

const Todo = (props) => {

    const handleToggle = () => {
        props.toggleItem(props.todo.id)
    }

    return (
        <div className="todo-list">
            <div className={`name${props.todo.completed ? ' completed' : ''}`}>
                <p onClick={handleToggle} className="list-item">{props.todo.item}</p>
            </div>
        </div>
    );
}

export default Todo;