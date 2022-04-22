import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import getAllTodos from './services/getAllTodos';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos()
      .then((response) => {
        setTodos(response.data.todos)
      })
  }, [])

  const list = todos.map((todo) => <TodoItem key={todo.id} todoObj={todo} />)

  return (
    <div className="App">
      <header className="App-header">
        {list}
      </header>
    </div>
  );
}

export default App;
