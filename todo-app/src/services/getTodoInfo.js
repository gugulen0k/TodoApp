import axios from 'axios'

export const requestTodoInfo = ( id ) => {
    return axios.request({
        method: "GET",
        url: `http://localhost:5000/api/tasks/${id}`
    }).then(response => response.data.task)
}