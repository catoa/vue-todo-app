<template>
  <div class="container" style="margin-top: 2em;">
    <div class="row">
      <div class="col-6">
        <form class="todo-form form-inline">
          <div class="form-group">
            <input
              type="text"
              placeholder="What's next"
              class="form-control m-3"
              v-model="todo.text"
            />
            <button
              @click.prevent="createTodo()"
              @keyup.enter="createTodo()"
              class="btn btn-primary"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
    <hr />
    <TodoList></TodoList>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoList from '@/components/TodoList'
export default {
  name: 'TodoListView',
  components: {
    TodoList
  },
  data() {
    return {
      todo: {
        text: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    async createTodo() {
      if (this.todo.text !== '') {
        this.todo.text = this.todo.text.trim()
        await this.addTodo(this.todo)
        this.todo.text = ''
      }
    }
  }
}
</script>
