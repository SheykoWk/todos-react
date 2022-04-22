import axios from "axios"

const postNewUser = async(newUser) => {
    const URL = 'https://todos-go.herokuapp.com/api/todos'
    const req = await axios.post(URL, newUser)
    //get -> obtener informacion del servidor
    //post -> crear un nuevo recurso en el servidor
    //put -> actualizar un recurso existente en el servidor
    //delete -> eliminar un recurso existente en el servidor
    return req
}

export default postNewUser