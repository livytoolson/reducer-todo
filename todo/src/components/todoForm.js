import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/formReducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)

    // handleChange = e => {
    //     this.setState({
    //         input: e.target.value
    //     });
    // };

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.setState({
    //         input: ''
    //     })
    // }

    // handleAdd = () => {
    //     this.props.handleAddItem(this.state.input);
    // }

    // handleClear = () => {
    //     this.props.handleClearItem();
    // }

    return (
        <form>
            <div className="input-add">
                <input 
                    className="todo-input" 
                    type="text" 
                    name="item" 
                    placeholder="todo...">
                </input>
                <button className="addBtn" >Add</button>
                {/* <button className="addBtn" onClick={() => dispatch( type: 'ADD_NEW_TODO')}>Add</button> */}
            </div>
            <div>
                <button className="clearBtn">Clear Completed</button>
            </div>
        </form>
    );
}
export default TodoForm;