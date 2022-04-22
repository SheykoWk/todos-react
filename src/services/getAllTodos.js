import axios from "axios"

const getAllTodos = async() => {
    const URL = 'https://todos-go.herokuapp.com/api/todos'
    const req = await axios.get(URL)
    //get -> obtener informacion del servidor
    //post -> crear un nuevo recurso en el servidor
    //put -> actualizar un recurso existente en el servidor
    //delete -> eliminar un recurso existente en el servidor
    return req
}

export default getAllTodos