import React from 'react';
import './App.css';
import './components/Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  
    return (
      <div className="app-wrapper">
        <div className="todo-form">
          <h1>Todo List</h1>
          <TodoForm />
        </div>
        <TodoList />
      </div>
    );
  };

export default App;
