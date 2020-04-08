<template>
  <TodoList :todos="todos"></TodoList>
</template>

<script>
import TodoList from '@/components/TodoList'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['todos'])
  },
  components: {
    TodoList
  }
}
</script>

<style></style>
