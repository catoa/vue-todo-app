<template>
  <div class="container">
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
    <div class="row">
      <div class="col-6">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item mr-auto"
            v-for="(todo, index) in todos"
            :key="index"
          >
            <div
              class="todo-item"
              @click="toggleTodo(todo)"
              :class="{ strike: todo.completed }"
            >
              {{ todo.text }}
            </div>
            <span class="todo-item__delete-btn" @click="deleteTodo(todo.id)"
              ><feather type="delete"></feather
            ></span>
          </li>
        </ul>
      </div>
      <div class="col-6">
        <h1>This is where the completed todos will go</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    todo: {
      text: '',
      completed: false
    }
  }),
  created() {
    this.loadTodos()
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapActions(['addTodo', 'loadTodos', 'toggleTodo', 'deleteTodo']),
    createTodo() {
      console.log(this.todo)
      this.addTodo(this.todo)
      this.todo.text = ''
    }
  }
}
</script>

<style lang="scss">
.strike {
  text-decoration: line-through;
}
.todo-item {
  cursor: pointer;
  display: inline-block;
  margin-right: 1em;
}
.todo-item__delete-btn {
  position: relative;
  top: 0.25rem;
  color: red;
}
</style>
