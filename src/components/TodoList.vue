<template>
  <div class="row">
    <div class="col-6">
      <ul class="list-group list-group-flush">
        <transition-group name="fade">
          <li
            class="list-group-item todo-item"
            v-for="todo in incompleteTodos"
            :key="todo.id"
          >
            <input
              type="checkbox"
              class="todo-item__checkbox"
              v-model="todo.completed"
            />
            <span
              class="todo-item__text"
              @click="toggleTodo(todo)"
              :class="{ strike: todo.completed }"
            >
              {{ todo.text }}
            </span>
            <span class="todo-item__delete-btn" @click="deleteTodo(todo.id)"
              ><feather type="delete"></feather
            ></span>
          </li>
        </transition-group>
      </ul>
    </div>
    <div class="col-6" v-if="completedTodos.length > 0">
      <h3>Completed</h3>
      <small style="color: grey;">Click to mark as incomplete</small>
      <hr />
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item todo-item__text"
          v-for="todo in completedTodos"
          :key="todo.id"
          @click="toggleTodo(todo)"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['incompleteTodos', 'completedTodos'])
  },
  methods: {
    ...mapActions(['toggleTodo', 'deleteTodo'])
  }
}
</script>

<style lang="scss">
.strike {
  text-decoration: line-through;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.todo-item {
  cursor: pointer;
  .todo-item__checkbox {
    margin-right: 1.5em;
  }
  .todo-item__text {
    display: inline-block;
    margin-right: 2em;
    vertical-align: middle;
  }
  .todo-item__delete-btn {
    position: relative;
    top: 0.25rem;
    color: red;
    vertical-align: middle;
  }
}
</style>
