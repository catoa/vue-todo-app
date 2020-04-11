<template>
  <nav id="app-navbar" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">ToDo Manager</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/todos" class="nav-link">Todos</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
#app-navbar {
  color: teal;
}
</style>
