import React from 'react';
import './App.css';
import './components/Todo.css';
import TodoForm from './components/TodoForm';

const App = () => {
  
    return (
      <div className="app-wrapper">
        <div className="todo-form">
          <h1>Todo List</h1>
          <TodoForm />
        </div>
      </div>
    );
  };

export default App;
