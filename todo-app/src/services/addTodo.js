import axios from 'axios'

export const addTodo = ( name ) => {
    return axios.request({
        method: "POST",
        url: 'https://gugulenok-todo-app-api.herokuapp.com/api/add_new_task',
        data: {
            name: name,
            completed: false
        }
    }).then(response => response.data.task)
}