import axios from 'axios'

export const removeTodo = ( id ) => {
    return axios.request({
        method: "DELETE",
        url: `https://gugulenok-todo-app-api.herokuapp.com/api/delete_task/${id}`,
    }).then(response => response.data)
}