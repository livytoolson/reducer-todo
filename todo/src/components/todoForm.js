import React from 'react';

class TodoForm extends React.Component {
    render() {
        return(
            <form>
                <div>
                    <input placeholder="todo..."></input>
                    <button>Add</button>
                </div>
                <div>
                    <button>Clear Completed</button>
                </div>
            </form>
        )
    }
}
export default TodoForm;