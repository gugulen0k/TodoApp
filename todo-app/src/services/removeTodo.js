import axios from 'axios'

export const removeTodo = ( id ) => {
    return axios.request({
        method: "DELETE",
        url: `http://localhost:5000/api/delete_task/${id}`,
    }).then(response => response.data)
}