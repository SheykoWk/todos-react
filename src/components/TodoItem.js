const TodoItem = ({todoObj, onDelete}) => {
    return(
        <div>
            <h1>{todoObj.task}</h1>
            <p>{todoObj.student}</p>
            <input type="checkbox"  value={todoObj.isCompleted} />
            <button onClick={() => onDelete(todoObj.id)}>Eliminar</button>
        </div>
    )
}

export default TodoItem