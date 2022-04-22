import './App.css';
import { useEffect, useState } from 'react';
import getAllTodos from './services/getAllTodos';
import TodoItem from './components/TodoItem';
import { useForm } from 'react-hook-form';

function App() {

  const {register, handleSubmit, reset} = useForm()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos()
      .then((response) => {
        console.log(response.data)
        setTodos(response.data.todos)
      })
  }, [])

  const onSubmit = (res) => {
    console.log(res)
  }

  const list = todos.map((todo) => <TodoItem key={todo.id} todoObj={todo} />)

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Estudiante</h3>
          <input {...register("student")} />
          <h3>Tarea</h3>
          <input {...register("task")} />
          <button>Enviar</button>
        </form>
        {list}
      </header>
    </div>
  );
}

export default App;
