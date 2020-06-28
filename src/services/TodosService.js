import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getTodos() {
    return apiClient.get('/todos')
  },
  getTodosById(id) {
    return apiClient.get('/todos/' + id)
  },
  postTodo(todo) {
    return apiClient.post('/todos', todo)
  },
  toggleTodo(todo) {
    return apiClient.put('/todos/' + todo.id, {
      id: todo.id,
      text: todo.text,
      completed: !todo.completed
    })
  },
  deleteTodo(id) {
    return apiClient.delete('/todos/' + id)
  }
}
