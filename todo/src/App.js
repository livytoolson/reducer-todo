import React from 'react';
import './App.css';
import './components/Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todo = [
  {
    task: 'Get car washed',
    id: 123,
    completed: false
  }
];

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todo: todo
    }
  }

  // const [state, dispatch] = useReducer(reducer, initialState);

  handleToggleItem = (itemId) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  handleAddItem = (task) => {
    this.setState({
      todo: [...this.state.todo, {
        task: task,
        id: Date.now(this.state.todo),
        completed: false
      }]
    })
  }

  handleClearItem = () => {
    this.setState({
      todo: this.state.todo.filter(item => (!item.completed))
    });
  };

  render() {
    return (
      <div className="app-wrapper">
        <div className="todo-form">
          <h1>Todo List</h1>
          <TodoForm handleAddItem={this.handleAddItem}/>
        </div>
        <TodoList handleClearItems={this.clearItems} handleToggleItem={this.handleToggleItem} todo={this.state.todo}/>
      </div>
    );
  };
}

export default App;
