const TodoItem = ({todoObj}) => {
    return(
        <div>
            <h1>{todoObj.task}</h1>
            <p>{todoObj.student}</p>
        </div>
    )
}

export default TodoItem