import axios from 'axios'

export const updateTodo = ( id, name, completed ) => {
    return axios.request({
        method: "PATCH",
        url: `https://gugulenok-todo-app-api.herokuapp.com/api/update_task/${id}?name=${name}&completed=${completed}`
    }).then(response => response.data.task)
}