<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { mapActions } from 'vuex'
export default {
  components: {
    Header,
    Footer
  },
  created() {
    this.loadTodos()
  },
  methods: {
    ...mapActions(['loadTodos'])
  }
}
</script>

<style lang="scss"></style>
