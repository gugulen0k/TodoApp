import axios from 'axios'

export const getAllTodosQuery = () => {
    try {
        axios.get('localhost:5000/api/tasks').then(response => response.data.tasks)
    } catch (error) {
        return error
    }
}

// const API = {
//     async fetch () {
//         try {
//             return await axios.get('localhost:5000/api/tasks').then(response => response.data)
//         } catch(error) {
//             return error
//         }
//     },

//     async findById(id) {
//         try {
//             return await axios.get(`localhost:5000/api/tasks/${id}`).then(response => response.data)
//         } catch(error) {
//             return error
//         }
//     },

//     async addNewTask({ _name, _completed }) {
//         try {
//             return await axios.post('localhost:5000/api/add_new_task', {
//                 name: _name,
//                 completed: _completed
//             })
//         } catch(error) {
//             return error
//         }
//     }
// }