<template>
  <div>
    <h1>{{ todosMsg }}</h1>
    {{ todosCount }}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    msg: 'You have 10 todos'
  }),
  computed: {
    todosMsg() {
      return this.$store.state.todos.length
        ? `You have ${this.$store.state.todos.length} to dos`
        : `something else`
    },
    todosCount() {
      return this.$store.state.todos.length
    }
  }
}
</script>
