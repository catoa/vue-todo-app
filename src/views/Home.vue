<template>
  <div id="home">
    <h1>{{ todosMsg }}</h1>
    <router-link :to="{ name: 'todos' }">See your todos</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['incompleteTodos']),
    todosMsg() {
      let incompleteTodosCount = this.incompleteTodos.length
      if (incompleteTodosCount > 0) {
        if (incompleteTodosCount === 1) {
          return 'You have 1 to do'
        } else {
          return `You have ${incompleteTodosCount} to dos`
        }
      } else {
        return 'Hooray! You have nothing to do!'
      }
    }
  }
}
</script>
<style scoped>
#home {
  padding: 1em;
}
</style>
