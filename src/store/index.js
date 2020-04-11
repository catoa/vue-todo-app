import TodoService from '@/services/TodosService'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    incompleteTodos: state => {
      return state.todos.filter(todo => todo.completed === false)
    },
    completedTodos: state => {
      return state.todos.filter(todo => todo.completed === true)
    }
  },
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
  actions: {
    async addTodo({ commit }, todo) {
      try {
        let response = await TodoService.postTodo(todo)
        commit('ADD_TODO', response.data)
      } catch (err) {
        return Error(err.status)
      }
    },
    async loadTodos({ commit }) {
      try {
        let response = await TodoService.getTodos()
        commit('LOAD_TODOS', response.data)
      } catch (err) {
        return Error(err.status)
      }
    },
    async toggleTodo({ commit }, todo) {
      try {
        await TodoService.toggleTodo(todo)
        commit('TOGGLE_TODO', todo.id)
      } catch (err) {
        return Error(err.status)
      }
    },
    async deleteTodo({ commit }, id) {
      try {
        await TodoService.deleteTodo(id)
        commit('DELETE_TODO', id)
      } catch (err) {
        return Error(err.status)
      }
    }
  }
  // Also provides a modules property that allows you to
  // divide the store into multiple modules (e.g. products
  // store and a shopping cart store)
  // modules: {}
})
