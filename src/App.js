import './App.css';
import { useEffect, useState } from 'react';
import getAllTodos from './services/getAllTodos';
import TodoItem from './components/TodoItem';
import { useForm } from 'react-hook-form';
import postNewUser from './services/postNewUser';
import deleteTodo from './services/deleteTodo';
import editTodo from './services/editTodo';

function App() {

  const {register, handleSubmit, reset} = useForm()
  const [todos, setTodos] = useState([])
  const [newUser, setNewUser] = useState({})
  const [idDelete, setIdDelete] = useState("")
  const [idEdit, setIdEdit] = useState('')
  const [editObj, setEditObj] = useState({})

  useEffect(() => {
    getAllTodos()
      .then((response) => {
        console.log(response.data)
        setTodos(response.data.todos)
      })
    postNewUser(newUser)
      .then((response) => {
        setTodos([ response.data, ...todos])
      })
  }, [newUser])

  useEffect(() => {
    deleteTodo(idDelete)
      .then((res) => {
        setTodos(filterTodo(idDelete))
      })
  }, [idDelete])

  useEffect(() => {
    editTodo(idEdit, editObj)
      .then(res => {
        console.log(res)
        setTodos([res.data,...filterTodo(idEdit)])
      })
  }, [idEdit, editObj])

  const onSubmit = (res) => {
    console.log(res)
    setNewUser(res)
  }

  const handleDelete = (id) => {
    setIdDelete(id)
  }
  const handleEdit = (id, obj) => {
    setIdEdit(id)
    setEditObj(obj)
  }

  const filterTodo = (id) => {
     const array = todos.filter((item) => item.id !== id)
     return array
  }

  const list = todos.map((todo) => <TodoItem key={todo.id} todoObj={todo} onDelete={handleDelete} onEdit={handleEdit} />)

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
