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
            <input type="checkbox" onChange={editStatus} value={todoObj.isCompleted} />
            <button onClick={() => onDelete(todoObj.id)}>Eliminar</button>
        </div>
    )
}

export default TodoItem