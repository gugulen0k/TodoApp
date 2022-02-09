import axios from 'axios'

export const requestAllTodos = () => {
    return axios.request({
        method: "GET",
        url: 'http://localhost:5000/api/tasks'
    }).then(response => response.data.tasks)
}