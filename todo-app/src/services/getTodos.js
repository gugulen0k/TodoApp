import axios from 'axios'

export const requestAllTodos = () => {
    return axios.request({
        method: "GET",
        url: 'https://gugulenok-todo-app-api.herokuapp.com/api/tasks'
    }).then(response => response.data.tasks)
}