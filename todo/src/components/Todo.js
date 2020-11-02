import React from "react";

const Todo = (props) => {

    // const handleClick = () => {
    //     props.handleToggle(props.key)
    // }

    return (
        <div className="todo-list">
            <div className={`name${props.completed ? ' completed' : ''}`}>
                <p className="list-item">{props.name}</p>
             </div>
        </div>
    );
}

export default Todo;