import TodoService from '@/services/TodosService'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  // implement mutation that updates the list of todos, CREATE, DELETE, UPDATE, COMPLETE
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    LOAD_TODOS(state, todos) {
      state.todos = todos
    },
    TOGGLE_TODO(state, id) {
      let updateIndex = state.todos.findIndex(todo => todo.id === id)
      state.todos[updateIndex].completed = !state.todos[updateIndex].completed
    },
    DELETE_TODO(state, id) {
      let deleteIndex = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(deleteIndex, 1)
    }
  },
  // implement get axios to fetch data from the db.json
  actions: {
    addTodo({ commit }, todo) {
      return TodoService.postTodo(todo)
        .then(resp => {
          console.log(resp)
          commit('ADD_TODO', { id: resp.data.id, ...todo })
        })
        .catch(error => console.error(error))
    },
    loadTodos({ commit }) {
      return TodoService.getTodos().then(resp => {
        commit('LOAD_TODOS', resp.data)
      })
    },
    toggleTodo({ commit }, todo) {
      return TodoService.toggleTodo(todo).then(resp => {
        console.log(resp)
        commit('TOGGLE_TODO', todo.id)
      })
    },
    deleteTodo({ commit }, id) {
      return TodoService.deleteTodo(id).then(resp => {
        console.log(resp)
        commit('DELETE_TODO', id)
      })
    }
  }
  // Also provides a modules property that allows you to
  // divide the store into multiple modules (e.g. products
  // store and a shopping cart store)
  // modules: {}
})
