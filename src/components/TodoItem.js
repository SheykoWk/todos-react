const TodoItem = ({todoObj, onDelete, onEdit}) => {

    const editStatus = (e) => {
        onEdit(todoObj.id, {
            task: todoObj.task,
            student: todoObj.student,
            isCompleted: e.target.checked
        })
    } 

    return(
        <div>
            <h1>{todoObj.task}</h1>
            <p>{todoObj.student}</p>
            <h3>{todoObj.id}</h3>
            {todoObj.isCompleted ? "esta completado" : "no esta completado"}
            <input type="checkbox" onChange={editStatus} checked={todoObj.isCompleted} />
            <button onClick={() => onDelete(todoObj.id)}>Eliminar</button>
        </div>
    )
}

export default TodoItem