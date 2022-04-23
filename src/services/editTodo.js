import axios from "axios"

const editTodo  = async (id, todoObj) => {
    const URL = `http://todos-go.herokuapp.com/api/todos/${id}`
    const req = await axios.put(URL, todoObj)
    return req
}

export default editTodo