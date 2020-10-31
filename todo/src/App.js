import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="app-wrapper">
      <div className="todo-form">
        <h1>Todo List</h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
