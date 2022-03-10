import axios from 'axios'

export const requestTodoInfo = ( id ) => {
    return axios.request({
        method: "GET",
        url: `https://gugulenok-todo-app-api.herokuapp.com/api/tasks/${id}`
    }).then(response => response.data.task)
}